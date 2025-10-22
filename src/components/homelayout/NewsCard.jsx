import { FaShareAlt, FaEye, FaStar } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

const NewsCard = ({ news }) => {
  const { title, image_url, details, author, rating, total_view } = news;

  return (
    <div className="card bg-base-100 shadow-md rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-sm">{author?.name}</h3>
            <p className="text-xs text-gray-500">
              {new Date(author?.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <button className="btn btn-ghost btn-sm text-gray-500">
          <CiBookmark />
          <FaShareAlt />
        </button>
      </div>

      {/* Title */}
      <div className="px-4 pb-2">
        <h2 className="font-bold text-lg leading-snug">{title}</h2>
      </div>

      {/* Thumbnail */}
      <figure className="px-4">
        <img
          src={image_url}
          alt={title}
          className="rounded-xl w-full h-56 object-cover"
        />
      </figure>

      {/* Details */}
      <div className="px-4 py-3 text-sm text-gray-600">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}...{" "}
            <span className="text-primary cursor-pointer font-medium">
              Read More
            </span>
          </>
        ) : (
          details
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-300 px-4 py-3 flex justify-between items-center text-sm text-gray-600">
        <div className="flex items-center gap-1 text-warning">
          {[...Array(Math.round(rating?.number || 0))].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-1 text-gray-700 font-semibold">
            {rating?.number.toFixed(1)}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
