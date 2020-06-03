import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Banner = styled.section`
  ${tw`bg-gray-200 border-b border-indigo-100 text-blue-900`};
`;

export const Content = styled.p`
  ${tw`mb-8`};
`;

export const Image = styled.figure`
  ${tw`sm:w-0 md:w-4/12 my-auto mx-auto`};
`;

export const LeftContent = styled.p`
  ${tw`flex flex-col sm:w-full md:w-7/12`};
`;