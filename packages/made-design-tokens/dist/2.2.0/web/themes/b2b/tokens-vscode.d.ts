/**
 * Do not edit directly
 * Generated on Sat, 17 Jun 2023 14:43:58 GMT
 */

export default tokens;

declare interface DesignToken {
  value: any;
  name?: string;
  comment?: string;
  themeable?: boolean;
  attributes?: {
    category?: string;
    type?: string;
    item?: string;
    subitem?: string;
    state?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

declare const tokens: {
  "footer": {
    "color": {
      "text": DesignToken,
      "background": DesignToken
    }
  },
  "header": {
    "color": {
      "text": DesignToken,
      "background": DesignToken
    }
  },
  "pill": {
    "color": {
      "background": {
        "default": DesignToken,
        "hover": DesignToken
      }
    },
    "border-radius": DesignToken
  },
  "search": {
    "color": {
      "background": DesignToken
    },
    "action": {
      "color": {
        "background": {
          "default": DesignToken,
          "hover": DesignToken
        }
      }
    }
  },
  "shadow": {
    "toggle": DesignToken,
    "default": DesignToken
  },
  "z-index": {
    "backdrop": DesignToken,
    "dropdown": DesignToken,
    "modal": DesignToken,
    "toast": DesignToken
  },
  "border": {
    "radius": {
      "01": DesignToken,
      "02": DesignToken,
      "03": DesignToken,
      "04": DesignToken,
      "05": DesignToken,
      "06": DesignToken,
      "07": DesignToken,
      "08": DesignToken,
      "09": DesignToken,
      "circle": DesignToken,
      "default": DesignToken,
      "large": DesignToken,
      "small": DesignToken
    }
  },
  "color": {
    "accent": {
      "01": {
        "dark": DesignToken,
        "darker": DesignToken,
        "default": DesignToken,
        "light": DesignToken
      },
      "02": DesignToken,
      "03": DesignToken,
      "04": DesignToken,
      "05": DesignToken,
      "06": DesignToken,
      "07": DesignToken
    },
    "gold": {
      "01": DesignToken,
      "02": DesignToken,
      "03": DesignToken,
      "04": DesignToken,
      "05": DesignToken,
      "06": DesignToken,
      "07": DesignToken
    },
    "gray": {
      "01": DesignToken,
      "01-25": DesignToken,
      "01-5": DesignToken,
      "02": DesignToken,
      "02-5": DesignToken,
      "03": DesignToken,
      "03-5": DesignToken,
      "04": DesignToken,
      "04-5": DesignToken,
      "05": DesignToken,
      "05-5": DesignToken,
      "06": DesignToken,
      "06-5": DesignToken,
      "07": DesignToken
    },
    "green": {
      "01": DesignToken,
      "02": DesignToken,
      "03": DesignToken,
      "04": DesignToken,
      "05": DesignToken,
      "06": DesignToken,
      "07": DesignToken
    },
    "orange": {
      "01": DesignToken,
      "02": DesignToken,
      "03": DesignToken,
      "04": DesignToken,
      "05": DesignToken,
      "06": DesignToken,
      "07": DesignToken
    },
    "red": {
      "01": DesignToken,
      "02": DesignToken,
      "03": DesignToken,
      "04": DesignToken,
      "05": DesignToken,
      "06": DesignToken,
      "07": DesignToken
    },
    "teal": {
      "01": DesignToken,
      "02": DesignToken,
      "03": DesignToken,
      "04": DesignToken,
      "05": DesignToken,
      "06": DesignToken,
      "07": DesignToken
    },
    "white": DesignToken,
    "yellow": {
      "01": DesignToken,
      "02": DesignToken,
      "03": DesignToken,
      "04": DesignToken,
      "05": DesignToken,
      "06": DesignToken,
      "07": DesignToken
    },
    "green-success": {
      "01": DesignToken,
      "02": DesignToken,
      "03": DesignToken,
      "04": DesignToken,
      "05": DesignToken,
      "06": DesignToken,
      "07": DesignToken
    },
    "red-error": {
      "01": DesignToken,
      "02": DesignToken,
      "03": DesignToken,
      "04": DesignToken,
      "05": DesignToken,
      "06": DesignToken,
      "07": DesignToken
    },
    "action": {
      "background": {
        "disabled": DesignToken,
        "highlight": DesignToken,
        "hover": DesignToken,
        "off": DesignToken,
        "on": DesignToken,
        "on-dark": {
          "active": DesignToken,
          "default": DesignToken,
          "hover": DesignToken
        },
        "primary": {
          "active": DesignToken,
          "default": DesignToken,
          "hover": DesignToken
        },
        "secondary": {
          "active": DesignToken,
          "default": DesignToken,
          "hover": DesignToken
        },
        "selected": DesignToken,
        "selected-hover": DesignToken
      },
      "border": {
        "disabled": DesignToken,
        "focus": DesignToken,
        "on-dark": {
          "active": DesignToken,
          "default": DesignToken,
          "hover": DesignToken
        },
        "primary": {
          "active": DesignToken,
          "default": DesignToken,
          "hover": DesignToken
        },
        "secondary": {
          "active": DesignToken,
          "default": DesignToken,
          "hover": DesignToken
        },
        "selected": {
          "on-dark": DesignToken,
          "on-light": DesignToken
        },
        "focus-on-dark": DesignToken
      },
      "disabled": DesignToken,
      "disabled-button": DesignToken,
      "disabled-toggle": DesignToken,
      "disabled-text-input": DesignToken,
      "on-dark": {
        "active": DesignToken,
        "default": DesignToken,
        "hover": DesignToken
      },
      "primary": {
        "active": DesignToken,
        "default": DesignToken,
        "hover": DesignToken
      },
      "secondary": {
        "active": DesignToken,
        "default": DesignToken,
        "hover": DesignToken
      },
      "text": {
        "disabled": DesignToken,
        "on-dark": DesignToken,
        "on-dark-active": DesignToken,
        "on-dark-default": DesignToken,
        "on-dark-hover": DesignToken,
        "on-disabled": DesignToken,
        "on-hover": DesignToken,
        "on-primary": DesignToken,
        "on-secondary": DesignToken,
        "on-selected": DesignToken,
        "on-selected-hover": DesignToken,
        "primary": {
          "active": DesignToken,
          "default": DesignToken,
          "hover": DesignToken
        },
        "secondary": {
          "active": DesignToken,
          "default": DesignToken,
          "hover": DesignToken
        }
      }
    },
    "background": {
      "default": DesignToken,
      "gray-lightest": DesignToken,
      "primary": DesignToken,
      "01": DesignToken,
      "02": DesignToken,
      "inverse": DesignToken
    },
    "border": {
      "default": {
        "on-dark": DesignToken,
        "on-light": DesignToken
      }
    },
    "brand": {
      "on-primary": DesignToken,
      "on-secondary": DesignToken,
      "primary": DesignToken,
      "secondary": DesignToken
    },
    "feedback": {
      "background": {
        "error": DesignToken,
        "error-light": DesignToken,
        "information": DesignToken,
        "information-light": DesignToken,
        "success": DesignToken,
        "success-light": DesignToken,
        "warning": DesignToken
      },
      "border": {
        "error": DesignToken,
        "error-light": DesignToken,
        "information": DesignToken,
        "information-light": DesignToken,
        "success": DesignToken,
        "success-light": DesignToken,
        "warning": DesignToken
      },
      "error": DesignToken,
      "error-light": DesignToken,
      "information": DesignToken,
      "information-light": DesignToken,
      "success": DesignToken,
      "success-light": DesignToken,
      "warning": DesignToken,
      "text": {
        "error": DesignToken,
        "information": DesignToken,
        "on-error": DesignToken,
        "on-error-light": DesignToken,
        "on-information": DesignToken,
        "on-information-light": DesignToken,
        "on-success": DesignToken,
        "on-success-light": DesignToken,
        "on-warning": DesignToken,
        "success": DesignToken,
        "warning": DesignToken
      }
    },
    "text": {
      "default": {
        "on-dark": DesignToken,
        "on-light": DesignToken
      },
      "helper": DesignToken,
      "primary": DesignToken,
      "inverse": DesignToken
    },
    "visualization": {
      "01": DesignToken,
      "02": DesignToken,
      "03": DesignToken
    }
  },
  "font": {
    "body": {
      "family": {
        "bold": DesignToken,
        "default": DesignToken,
        "narrow": DesignToken
      },
      "letter.spacing": DesignToken,
      "line-height": DesignToken,
      "size": {
        "default": DesignToken,
        "large": DesignToken,
        "small": DesignToken
      },
      "weight": {
        "bold": DesignToken,
        "default": DesignToken
      }
    },
    "family": {
      "bold": DesignToken,
      "extra-light": DesignToken,
      "eyebrow": DesignToken,
      "heading": DesignToken,
      "light": DesignToken,
      "medium": DesignToken,
      "narrow": DesignToken,
      "narrow-bold": DesignToken,
      "narrow-medium": DesignToken,
      "regular": DesignToken
    },
    "heading": {
      "family": {
        "display": {
          "01": DesignToken,
          "02": DesignToken,
          "03": DesignToken
        },
        "eyebrow": {
          "01": DesignToken,
          "02": DesignToken
        },
        "level": {
          "01": DesignToken,
          "02": DesignToken,
          "03": DesignToken,
          "04": DesignToken,
          "05": DesignToken,
          "06": DesignToken
        }
      },
      "letter.spacing": {
        "display": {
          "01": DesignToken,
          "02": DesignToken,
          "03": DesignToken
        },
        "eyebrow": {
          "01": DesignToken,
          "02": DesignToken
        },
        "level": {
          "01": DesignToken,
          "02": DesignToken,
          "03": DesignToken,
          "04": DesignToken,
          "05": DesignToken,
          "06": DesignToken
        }
      },
      "line-height": {
        "display": {
          "01": DesignToken,
          "02": DesignToken,
          "03": DesignToken
        },
        "eyebrow": {
          "01": DesignToken,
          "02": DesignToken
        },
        "level": {
          "01": DesignToken,
          "02": DesignToken,
          "03": DesignToken,
          "04": DesignToken,
          "05": DesignToken,
          "06": DesignToken
        }
      },
      "size": {
        "display": {
          "01": DesignToken,
          "02": DesignToken,
          "03": DesignToken
        },
        "eyebrow": {
          "01": DesignToken,
          "02": DesignToken
        },
        "level": {
          "01": DesignToken,
          "02": DesignToken,
          "03": DesignToken,
          "04": DesignToken,
          "05": DesignToken,
          "06": DesignToken
        }
      },
      "weight": {
        "display": {
          "01": DesignToken,
          "02": DesignToken,
          "03": DesignToken
        },
        "eyebrow": {
          "01": DesignToken,
          "02": DesignToken
        },
        "level": {
          "01": DesignToken,
          "02": DesignToken,
          "03": DesignToken,
          "04": DesignToken,
          "05": DesignToken,
          "06": DesignToken
        }
      }
    },
    "size": {
      "10": DesignToken,
      "11": DesignToken,
      "12": DesignToken,
      "13": DesignToken,
      "14": DesignToken,
      "15": DesignToken,
      "01": DesignToken,
      "02": DesignToken,
      "03": DesignToken,
      "04": DesignToken,
      "05": DesignToken,
      "06": DesignToken,
      "07": DesignToken,
      "08": DesignToken,
      "09": DesignToken
    },
    "weight": {
      "bold": DesignToken,
      "default": DesignToken,
      "light": DesignToken,
      "medium": DesignToken
    }
  },
  "letter": {
    "spacing": {
      "default": DesignToken,
      "eyebrow": DesignToken
    }
  },
  "line": {
    "height": {
      "1-25-x": DesignToken,
      "1-5-x": DesignToken,
      "1-x": DesignToken,
      "default": DesignToken,
      "heading": DesignToken,
      "single": DesignToken
    }
  },
  "opacity": {
    "0": DesignToken,
    "15": DesignToken,
    "25": DesignToken,
    "50": DesignToken,
    "75": DesignToken,
    "100": DesignToken
  },
  "size": {
    "1-x": DesignToken,
    "2-x": DesignToken,
    "3-x": DesignToken,
    "4-x": DesignToken,
    "5-x": DesignToken,
    "6-x": DesignToken,
    "7-x": DesignToken,
    "8-x": DesignToken,
    "9-x": DesignToken,
    "10-x": DesignToken,
    "11-x": DesignToken,
    "12-x": DesignToken,
    "13-x": DesignToken,
    "14-x": DesignToken,
    "15-x": DesignToken,
    "16-x": DesignToken,
    "17-x": DesignToken,
    "18-x": DesignToken,
    "19-x": DesignToken,
    "20-x": DesignToken
  },
  "space": {
    "1-x": DesignToken,
    "2-x": DesignToken,
    "3-x": DesignToken,
    "4-x": DesignToken,
    "5-x": DesignToken,
    "6-x": DesignToken,
    "7-x": DesignToken,
    "8-x": DesignToken,
    "9-x": DesignToken,
    "10-x": DesignToken,
    "11-x": DesignToken,
    "12-x": DesignToken,
    "13-x": DesignToken,
    "14-x": DesignToken,
    "15-x": DesignToken,
    "16-x": DesignToken,
    "17-x": DesignToken,
    "18-x": DesignToken,
    "19-x": DesignToken,
    "20-x": DesignToken
  },
  "time": {
    "moderate": {
      "01": DesignToken,
      "02": DesignToken,
      "fast": {
        "01": DesignToken,
        "02": DesignToken
      }
    },
    "slow": {
      "01": DesignToken,
      "02": DesignToken
    }
  },
  "backdrop": {
    "color": {
      "background": DesignToken
    }
  },
  "button": {
    "border-radius": DesignToken
  },
  "connect": {
    "color": {
      "background": {
        "api": DesignToken,
        "application": DesignToken,
        "collection": DesignToken,
        "document": DesignToken,
        "product": DesignToken,
        "reference": DesignToken,
        "report": DesignToken
      },
      "border": {
        "api": DesignToken,
        "application": DesignToken,
        "collection": DesignToken,
        "document": DesignToken,
        "product": DesignToken,
        "reference": DesignToken,
        "report": DesignToken
      }
    }
  },
  "forms": {
    "color": {
      "background": {
        "default": DesignToken
      },
      "border": {
        "default": DesignToken
      }
    }
  },
  "grid": {
    "gutters": {
      "lg": DesignToken,
      "md": DesignToken,
      "sm": DesignToken
    },
    "margin": {
      "lg": DesignToken,
      "md": DesignToken,
      "sm": DesignToken
    }
  },
  "link": {
    "color": {
      "default": DesignToken,
      "on-dark": DesignToken
    }
  },
  "scrollbar": {
    "color": {
      "background": DesignToken
    }
  }
}