import Icon from "@/shared/ui/Icon";

type RatingProps = {
  rating: number;
};

export default function Rating({ rating, ...props }: RatingProps) {
  const maxStars = 5;
  const totalStars = Array.from({ length: maxStars });

  return (
    <div className="flex gap-1.5" {...props}>
      {totalStars.map((_, index) => {
        const isFilled = index < rating;

        return (
          <Icon
            aria-hidden="true"
            iconName={`icon-${isFilled ? "star-filled" : "star"}`}
            key={index}
            className="fill-green-accent"
            size={24}
          />
        );
      })}
    </div>
  );
}
