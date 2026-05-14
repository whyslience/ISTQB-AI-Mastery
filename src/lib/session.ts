export function getOrCreateSessionId(): string {
  if (typeof window === 'undefined') return 'server-session';
  
  let sessionId = localStorage.getItem('istqb_session_id');
  if (!sessionId) {
    sessionId = 'user-' + Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
    localStorage.setItem('istqb_session_id', sessionId);
  }
  return sessionId;
}
