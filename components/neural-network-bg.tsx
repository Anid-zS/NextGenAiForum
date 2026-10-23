"use client"

import { useEffect, useRef } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  pulsePhase: number
}

export function NeuralNetworkBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    let animationId: number
    let nodes: Node[] = []
    let width = 0
    let height = 0
    let pixelRatio = 0
    const backgroundColor = getComputedStyle(document.body).backgroundColor

    const resize = () => {
      const nextWidth = window.innerWidth
      const nextHeight = window.innerHeight
      const nextPixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      if (width === nextWidth && height === nextHeight && pixelRatio === nextPixelRatio) return

      const previousWidth = width
      const previousHeight = height
      width = nextWidth
      height = nextHeight
      pixelRatio = nextPixelRatio
      canvas.width = Math.round(width * pixelRatio)
      canvas.height = Math.round(height * pixelRatio)
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      if (previousWidth && previousHeight) {
        nodes.forEach((node) => {
          node.x *= width / previousWidth
          node.y *= height / previousHeight
        })
      } else {
        initNodes()
      }
      // Resizing clears the buffer; paint before the browser can display it.
      drawFrame(performance.now())
    }

    const initNodes = () => {
      const nodeCount = Math.floor((width * height) / 25000)
      nodes = []
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2 + 1,
          pulsePhase: Math.random() * Math.PI * 2,
        })
      }
    }

    const drawNode = (node: Node, time: number) => {
      const pulse = Math.sin(time * 0.002 + node.pulsePhase) * 0.5 + 0.5
      const glowRadius = node.radius + pulse * 3

      // Outer glow - subtle for light theme
      const gradient = ctx.createRadialGradient(
        node.x,
        node.y,
        0,
        node.x,
        node.y,
        glowRadius * 3
      )
      gradient.addColorStop(0, `rgba(59, 130, 246, ${0.15 + pulse * 0.1})`)
      gradient.addColorStop(0.5, `rgba(59, 130, 246, ${0.05 + pulse * 0.05})`)
      gradient.addColorStop(1, "rgba(59, 130, 246, 0)")

      ctx.beginPath()
      ctx.arc(node.x, node.y, glowRadius * 3, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()

      // Core
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(59, 130, 246, ${0.4 + pulse * 0.2})`
      ctx.fill()
    }

    const drawConnection = (node1: Node, node2: Node, distance: number, maxDistance: number) => {
      const opacity = (1 - distance / maxDistance) * 0.15
      const gradient = ctx.createLinearGradient(node1.x, node1.y, node2.x, node2.y)
      gradient.addColorStop(0, `rgba(59, 130, 246, ${opacity})`)
      gradient.addColorStop(0.5, `rgba(96, 165, 250, ${opacity * 1.2})`)
      gradient.addColorStop(1, `rgba(59, 130, 246, ${opacity})`)

      ctx.beginPath()
      ctx.moveTo(node1.x, node1.y)
      ctx.lineTo(node2.x, node2.y)
      ctx.strokeStyle = gradient
      ctx.lineWidth = 0.5
      ctx.stroke()
    }

    const drawFrame = (time: number) => {
      ctx.globalAlpha = 1
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, width, height)
      ctx.globalAlpha = 0.6

      const maxDistance = 150

      // Update and draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            drawConnection(nodes[i], nodes[j], distance, maxDistance)
          }
        }
      }

      // Update and draw nodes
      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < 0 || node.x > width) node.vx *= -1
        if (node.y < 0 || node.y > height) node.vy *= -1

        // Keep in bounds
        node.x = Math.max(0, Math.min(width, node.x))
        node.y = Math.max(0, Math.min(height, node.y))

        drawNode(node, time)
      })

    }

    const animate = (time: number) => {
      drawFrame(time)
      animationId = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener("resize", resize)

    animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full bg-background"
      aria-hidden="true"
    />
  )
}
