import { auth } from "../firebase";

// ─── Synchronous helpers (require auth.currentUser to already be set) ──────────
// Use these ONLY inside onAuthStateChanged callbacks or after auth is confirmed.

export function saveUserData(key, value) {
  const user = auth.currentUser;
  if (!user) return;

  localStorage.setItem(
    `${user.uid}_${key}`,
    JSON.stringify(value)
  );
}

export function getUserData(key) {
  const user = auth.currentUser;
  if (!user) return null;

  const data = localStorage.getItem(`${user.uid}_${key}`);
  return data ? JSON.parse(data) : null;
}

export function removeUserData(key) {
  const user = auth.currentUser;
  if (!user) return;

  localStorage.removeItem(`${user.uid}_${key}`);
}

export function clearUserData() {
  const user = auth.currentUser;
  if (!user) return;

  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith(`${user.uid}_`)) {
      localStorage.removeItem(key);
    }
  });
}

// ─── UID-based helpers (safe to call with an explicit uid) ────────────────────
// Use these when you already have the uid from onAuthStateChanged.

export function saveUserDataByUid(uid, key, value) {
  if (!uid) return;
  localStorage.setItem(`${uid}_${key}`, JSON.stringify(value));
}

export function getUserDataByUid(uid, key) {
  if (!uid) return null;
  const data = localStorage.getItem(`${uid}_${key}`);
  return data ? JSON.parse(data) : null;
}
