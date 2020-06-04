import { createGlobalStyle } from 'styled-components';
import tw from 'tailwind.macro';

export default createGlobalStyle`
  body {
    ${tw`m-0 text-indigo-100 bg-blue-900`};
  }

  a {
    ${tw`text-indigo-100 hover:text-indigo-300`};
  }

  p + p {
    ${tw`mt-4`};
  }

  span + em {
    ${tw`text-sm not-italic text-center block w-full`};
}
`;
