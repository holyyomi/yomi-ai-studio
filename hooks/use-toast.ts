"use client"

export function useToast() {
  const toast = (message: any) => {
    console.log('Toast:', message)
  }
  
  return {
    toast,
    toasts: []
  }
} 