export interface ITariffTheme {
  classes: {
    header: string;
    button: string;
  };
}

export const TariffThemes: Record<number, ITariffTheme> = {
  1: {
    classes: {
      header: 'spliced-block-gradient--gray',
      button: 'button--gray',
    },
  },
  2: {
    classes: {
      header: 'spliced-block-gradient',
      button: 'button--gray',
    },
  },
  3: {
    classes: {
      header: 'spliced-block-gradient--green',
      button: '',
    },
  },
  4: {
    classes: {
      header: 'spliced-block-gradient--error',
      button: 'button--error',
    },
  },
};
