import Image from 'next/image';

interface Props {
  img: string;
  city: string;
  country: string;
}

const TopPick: React.FC<Props> = ({ img, city, country }) => {
  return (
    <div className="relative m-2 h-32 w-44 cursor-pointer rounded-lg">
      <Image
        width={200}
        height={200}
        className=" size-full rounded-lg object-cover object-center"
        src={img}
        alt="location"
      />
      <div className="absolute bottom-0 left-0 pl-3 text-white">
        <p className="block text-xl font-semibold">{city},</p>
        <p className="block text-2xl font-bold">{country}</p>
      </div>
    </div>
  );
};

export default TopPick;
