import { PortableText } from '@portabletext/react';
import Img from '../Img'; // Use your custom Img component directly


const serializers = {
  types: {
    image: Img
  },
};

const MyPortableText = (props: any) => (
	<PortableText
		{...props}
		components={serializers}
	/>
);

export default MyPortableText;
