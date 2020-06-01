import styled from 'styled-components';
import tw from 'tailwind.macro';

export interface StyledProps {
  section?: boolean;
}

export const Banner = styled.section`
  ${tw`bg-gray-200 border-b border-indigo-100 text-blue-900 `};
`;

export const Container = styled.div<StyledProps>`
  ${tw`flex flex-wrap max-w-screen-lg w-full mx-auto p-5 `};
  ${({ section }) => section && tw`py-8 sm:py-16`};
`;
