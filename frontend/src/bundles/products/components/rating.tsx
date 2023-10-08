import { StarIcon } from '@heroicons/react/20/solid'

type Props = {
  value: number | undefined,
  text: string | undefined
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Rating = ({ value, text }: Props) => {
  return (
    <>
      <div className="flex items-center">
        {[0, 1, 2, 3, 4].map((rating) => (
          <StarIcon
            key={rating}
            className={classNames(
              value && value > rating ? 'text-yellow-400' : 'text-gray-300',
              'h-5 w-5 flex-shrink-0'
            )}
            aria-hidden="true"
          />
        ))}
        <span className='pl-2 text-sm'>{text}</span>
      </div>
      <p className="sr-only">{`${value} out of 5 stars`} </p>
    </>
  );
};

export default Rating;
