import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Newsletter = styled.section`
  ${tw`bg-gray-100 border-t border-indigo-100 mt-auto text-blue-900`};
`;

export const Form = styled.form`
  ${tw`flex flex-col flex-wrap items-center justify-center mx-auto mt-4 w-full`};
`;

export const Input = styled.input`
  ${tw`bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-2 px-4 block w-1/3 appearance-none leading-normal mb-3`};
`;

export const TextArea = styled.textarea`
  ${tw`bg-white focus:outline-none focus:shadow-outline border resize-none border-gray-300 rounded-md py-2 px-4 block w-2/3 appearance-none leading-normal mb-3 `};
`;



