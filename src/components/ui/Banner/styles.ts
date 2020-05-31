import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Banner = styled.section`
  ${tw`bg-gray-200 border-b border-indigo-100 `};
`;

export const Content = styled.p`
  ${tw`mb-8`};
`;

export const Image = styled.figure`
  ${tw`w-1/3`};
`;

export const LeftContent = styled.p`
  ${tw`w-2/3 flex flex-col`};
`;