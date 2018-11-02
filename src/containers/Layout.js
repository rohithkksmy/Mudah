import React from "react"; // eslint-disable-line no-unused-vars
import { connect } from "react-redux"; // eslint-disable-line no-unused-vars
import "bootstrap/dist/css/bootstrap.min.css";// eslint-disable-line no-unused-vars
import Media from "react-media";// eslint-disable-line no-unused-vars
import BreadCrumb from "../components/breadCrumb/BreadCrumb";// eslint-disable-line no-unused-vars
import Description from "../components/description/Description";// eslint-disable-line no-unused-vars
import ImageContainer from "../components/imageContainer/ImageContainer";// eslint-disable-line no-unused-vars
import ImageDetail from "../components/imageDetail/ImageDetail";// eslint-disable-line no-unused-vars
import breadCrumbVal from "../utils/breadCrumbVariables";// eslint-disable-line no-unused-vars
import ContactContainer from "../components/contactContainer/ContactContainer";// eslint-disable-line no-unused-vars
import Header from "../components/header/Header";// eslint-disable-line no-unused-vars

@connect((store) => {
	return {
		users:store.user.users,
	};
})

export default class Layout extends React.Component {
	constructor(){
		super();
		this.state = {
			device: "mobile"
		};
	}

	render() {
		return (
			<div>
				<Media query = {{maxWidth: 320}} defaultMatches={this.state.device === "mobile"} render={() => (	
					<div>
						<Header classValue = "image-header-medium"/>	
						<Description classValue= "description-header-small"></Description>
						<ImageContainer classValue= "image-container-small" imageClassvalue = "image-container-image-small"></ImageContainer>
						<ImageDetail classValue= "image-Detail-small"
							iconClassValue = "icon-Container-Big"
							priceClassValue = "price-small"
							itemCondClassValue = "item-condition-small"
							itemLocClassValue = "item-location-small"
							sellerClassValue = "seller-small"
							privateSellerClassValue = "private-seller-small"
							priceDescClassValue = "price-desc-small"
							itemCondDescClassValue ="item-con-desc-small"
							itemLocDescClassValue ="item-loc-desc-small "
							sellerDescClassValue="seller-desc-small"
							imageDescBig ="image-desc-small"
							share = "share-small"
							wish = "wish-text-small"
							shareText = "share-text-small"
							favorite = "favorite-small"></ImageDetail>
						<ContactContainer
							classValue="contact-cont-small"
							templateSize = {false}
							contactDescClassValue="contact-desc-big"></ContactContainer>
					</div>
			  	)}/>
				<Media query={{maxWidth: 640, minWidth:321}} defaultMatches={this.state.device === "ipad"} render={() => (	
					<div>
						<Header classValue = "image-header-medium"/>
						<Description classValue= "description-header-medium"></Description>
						<ImageContainer classValue= "image-container-medium" imageClassvalue = "image-container-image-medium"></ImageContainer>
						<ImageDetail classValue= "image-Detail-medium"
							iconClassValue = "icon-Container-Big"
							priceClassValue = "price-big"
							itemCondClassValue = "item-condition-big"
							itemLocClassValue = "item-location-big"
							sellerClassValue = "seller-big"
							privateSellerClassValue = "private-seller-big"
							priceDescClassValue = "price-desc-big"
							itemCondDescClassValue ="item-con-desc-big"
							itemLocDescClassValue ="item-loc-desc-big"
							sellerDescClassValue="seller-desc-big"
							imageDescBig ="image-desc-big"
							contactContainer="contact-cont-big"
							contactDescClassValue="contact-desc-big"
							share = "share-big"
							wish = "wish-text-big"
							shareText = "share-text-big"
							favorite = "favorite-big"
							templateSize = {true}></ImageDetail>
					</div>
			  	)}/>
			  	<Media query="(min-width: 641px)" defaultMatches={this.state.device === "desktop"} render={() => (
					<div>
						<Header classValue = "image-header-big"/>
						<BreadCrumb breadCrumb= {breadCrumbVal}></BreadCrumb>
						<Description classValue= "description-header-big"></Description>
						<ImageContainer imageClassvalue = "image-container-image-big" classValue= "image-Container-Big"></ImageContainer>
						<ImageDetail classValue= "image-Detail-Big"
							iconClassValue = "icon-Container-Big"
							priceClassValue = "price-big"
							itemCondClassValue = "item-condition-big"
							itemLocClassValue = "item-location-big"
							sellerClassValue = "seller-big"
							privateSellerClassValue = "private-seller-big"
							priceDescClassValue = "price-desc-big"
							itemCondDescClassValue ="item-con-desc-big"
							itemLocDescClassValue ="item-loc-desc-big "
							sellerDescClassValue="seller-desc-big"
							imageDescBig ="image-desc-big"
							contactContainer="contact-cont-big"
							contactDescClassValue="contact-desc-big"
							share = "share-big"
							wish = "wish-text-big"
							shareText = "share-text-big"
							favorite = "favorite-big"
							templateSize = {true}></ImageDetail>
					</div>
			  	)}/>
			</div>
		);
	}
}
