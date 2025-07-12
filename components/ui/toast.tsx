"use client"

export const ToastProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>
export const ToastViewport = () => <div />
export const Toast = ({ children }: { children: React.ReactNode }) => <div>{children}</div>
export const ToastTitle = ({ children }: { children: React.ReactNode }) => <div>{children}</div>
export const ToastDescription = ({ children }: { children: React.ReactNode }) => <div>{children}</div>
export const ToastClose = () => <button>×</button>
