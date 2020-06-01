import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Container } from 'components/ui/Container/styles';

export const Header = styled.header`
  ${tw`bg-gray-100 border-b border-gray-200 -mb-px`};
`;

export const Wrapper = styled(Container)`
  ${tw`items-center`};
`;

export const Flag = styled.img`
${tw`w-10 h-10 mr-3 border border-teal-400 rounded-full`};
`;