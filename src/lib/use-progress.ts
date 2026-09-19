"use client";

import { useSyncExternalStore } from "react";
import { getAllSnapshot, getSnapshot, subscribe, type CertProgress, type ProgressStore } from "@/lib/progress";

const emptyProgress: CertProgress = {
  modulesRead: [],
  quizStats: {},
  examAttempts: [],
  flashcardsSeen: [],
};

const emptyStore: ProgressStore = {};

export function useCertProgress(certSlug: string): CertProgress {
  return useSyncExternalStore(
    subscribe,
    () => getSnapshot(certSlug),
    () => emptyProgress,
  );
}

export function useAllProgress(): ProgressStore {
  return useSyncExternalStore(subscribe, () => getAllSnapshot(), () => emptyStore);
}
