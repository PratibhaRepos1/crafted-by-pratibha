export interface About {
    aboutMe: string;
    linkGithub: string;
    linkLinkedIn: string;
}

// Default data factory function
export function getDefaultAbout(): About {
    return {
      aboutMe: '',
      linkGithub: '',
      linkLinkedIn: '',
      // Add more fields as needed with default empty strings
    };
  }