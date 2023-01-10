import { styled } from "stitches.config";

export const Container = styled('div', {
  width: '100%',
  maxWidth: '40rem',
  margin: '0 auto',
  padding: '0 1rem',
  '@table-min': {
    padding: '0 2rem',

  },
  '@laptops-min': {
    maxWidth: '70rem'
  },

  '@desktop-min': {
    maxWidth: '80rem'
  }
})