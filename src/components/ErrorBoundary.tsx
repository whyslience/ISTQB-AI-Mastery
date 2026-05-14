'use client';

import React, { Component, type ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
  fallbackLabel?: string;
}

interface State {
  hasError: boolean;
  message: string;
}

/**
 * Drop-in Error Boundary for Quiz and Exam components.
 * Prevents a single component crash from taking down the whole page.
 */
export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error?.message ?? "Unknown error" };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Could send to an error tracking service here
    console.error("[ErrorBoundary] caught:", error, info);
  }

  reset = () => this.setState({ hasError: false, message: "" });

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="flex flex-col items-center justify-center gap-4 rounded-2xl p-10 my-8"
          style={{
            background: "var(--color-danger-soft)",
            border: "1px solid var(--color-danger)",
            color: "var(--color-text-primary)",
          }}
        >
          <div
            className="flex items-center justify-center rounded-xl"
            style={{
              width: 48, height: 48,
              background: "rgba(220,38,38,0.15)",
              color: "var(--color-danger)",
            }}
          >
            <AlertTriangle style={{ width: 24, height: 24 }} />
          </div>
          <div className="text-center">
            <p className="font-bold text-base mb-1">
              {this.props.fallbackLabel ?? "Something went wrong"}
            </p>
            <p className="text-xs opacity-70">Đã xảy ra lỗi — vui lòng thử lại.</p>
            {this.state.message && (
              <code
                className="block mt-2 text-[10px] px-3 py-1 rounded-lg overflow-auto max-w-sm"
                style={{ background: "rgba(0,0,0,0.2)" }}
              >
                {this.state.message}
              </code>
            )}
          </div>
          <button
            onClick={this.reset}
            className="btn btn-secondary flex items-center gap-2"
            style={{ padding: "10px 24px", fontSize: 13 }}
          >
            <RefreshCw style={{ width: 14, height: 14 }} />
            Try Again / Thử lại
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
