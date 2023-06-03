/* eslint-disable react/prop-types */
function Card(props) {
  console.log(props);
  return (
    <div className="flex justify-around w-[50rem] px-5 py-8 mx-auto font-[Geologica] border-b-slate-600 border-b-2">
      <div className="w-[300px] rounded-lg overflow-hidden">
        <img src={props.item.imageUrl} />
      </div>
      <div className=" w-1/2 self-center">
        <p className="text-sm">
          {props.item.location.toUpperCase()}
          <span className=" ml-3 font-light text-slate-600">
            <a href={props.item.googleMapsUrl}>view on google maps</a>
          </span>
        </p>
        <h1 className=" text-4xl font-bold mb-2">{props.item.title}</h1>
        <p className=" mb-5">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className=" text-xs">{props.item.description}</p>
      </div>
    </div>
  );
}

export default Card;
