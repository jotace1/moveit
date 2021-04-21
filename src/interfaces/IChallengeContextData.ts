export interface IChallengeContextData {
  level: number;
  challengesCompleted: number;
  currentExperience: number;
  activeChallenge: {
    type: string;
    description: string;
    amount: number;
  };
  experienceToNextLevel: number;
  resetChallenge: () => void;
  levelUp: () => void;
  startNewChallenge: () => void;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
}
