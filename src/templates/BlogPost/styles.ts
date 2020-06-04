import styled from 'styled-components';
import tw from 'tailwind.macro';

export interface StyledProps {
  section?: boolean;
}

export const PostContainer = styled.div<StyledProps>`
  ${tw`flex flex-col max-w-screen-md w-full mx-auto p-5 leading-loose text-lg`};
  ${({ section }) => section && tw`py-8 sm:py-16`};
`;

export const Banner = styled.section`
  ${tw`bg-gray-200 border-b border-indigo-100 text-blue-900`};
`;

export const Title = styled.h3`
  ${tw`font-semibold mb-4`};
`;

export const Content = styled.div`
  ${tw`w-full overflow-hidden mb-10`};
  h1 {
    ${tw`my-4`};
  }
  span + em {
    ${tw`text-sm not-italic text-center block w-full`};
  }
`

export const Links = styled.div`
  ${tw`w-full flex justify-between mt-10`};
`;

