import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Container } from 'components/ui/Container/styles';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';

export const Header = styled.header`
  ${tw`bg-gray-100 border-b border-gray-200 -mb-px`};
`;

export const Wrapper = styled(Container)`
  ${tw`items-center`};
`;

export const Flag = styled(Link)`
  ${tw`text-indigo-900 hover:text-indigo-900`};
`;

export const Img = motion.custom(styled.figure`
${tw`w-8 h-8 mr-3 border border-teal-400 rounded-full`};
`);