import {Typography} from "@material-ui/core";
import React,{createElement} from "react";

function ServiceItem(props) {
	return (
			<>
				{createElement(props.icon, {className: "text-white"})}
				<Typography variant="h5" fontWeight="fontWeightBold">
					{props.title}
				</Typography>
				<Typography className="text-white">
					{props.description}
				</Typography>
			</>
	);
}

export default ServiceItem;