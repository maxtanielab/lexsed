import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import HeaderCards from "../HeaderCards";
import HeaderTabsContent from "../HeaderTabsContent";
import "./HeaderTabs.scss";

const HeaderTabs = ({ onClick, pro }) => {
	return (
		<React.Fragment>
			<div id="header-tabs">
				<h2 className="find-pro">
					Trouver mon <b className="fw-bold">{pro}</b>
				</h2>
				<Tabs>
					<TabList>
						<Tab onClick={onClick}>Avocat</Tab>
						<Tab onClick={onClick}>Notaire</Tab>
						<Tab onClick={onClick}>Huissier</Tab>
					</TabList>

					<TabPanel>
						<HeaderTabsContent proName={pro} />
					</TabPanel>
					<TabPanel>
						<HeaderTabsContent proName={pro} />
					</TabPanel>
					<TabPanel>
						<HeaderTabsContent proName={pro} />
					</TabPanel>
				</Tabs>
			</div>
		</React.Fragment>
	);
};

export default HeaderTabs;
