"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function Drawing() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseDown = (e: MouseEvent) => {
      setIsDrawing(true);
      draw(e);
    };

    const handleMouseUp = () => {
      setIsDrawing(false);
      ctx.beginPath();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDrawing) return;
      draw(e)
    };

    const draw = (e: MouseEvent) => {
      if (!ctx) return;


      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#09090A';

      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);

    };
  }, [isDrawing]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full"
      style={{ touchAction: 'none' }}
    />
  );
}
