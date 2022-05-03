const Social = (props) => {
    return (
      <>
        <a href={props.url} className="">
          <div className=" text-secondary dark:text-clear hover:text-primary text-sm p-2">
            <i className={`${props.icon} text-2xl`}></i>
            {/* <span className="text-base block">{props.name}</span> */}
          </div>
        </a>
      </>
    );
  };
  
  export default Social;