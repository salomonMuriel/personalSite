import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Newsletter = styled.section`
  ${tw`bg-gray-100 border-t border-indigo-100 mt-auto text-blue-900`};
`;

export const Form = styled.div`
  ${tw`flex flex-col items-center justify-center mx-auto mt-4`};
`;

export const Input = styled.input`
  ${tw`bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-2 px-4 block w-full appearance-none leading-normal mb-3`};
`;

export const LongText = styled.input`
  ${tw`bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-2 px-4 block w-full appearance-none leading-normal mb-3 `};
`;