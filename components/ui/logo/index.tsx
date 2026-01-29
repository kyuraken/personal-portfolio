import Image from 'next/image';

export default function Logo() {
  return (
    <Image src={`/images/jasonpfp.jpeg`} alt="Logo" height={32} width={32} />
  );
}
