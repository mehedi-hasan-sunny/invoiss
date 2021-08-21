import React from 'react';
import Section from "../../components/styled/component/Section";
import Parallax from "../../components/Parallax";
import {Box, Container, Stack, Typography} from "@material-ui/core";
import QuestionCard from "../../components/help/QuestionCard";


const questionAnswers = [
	{
		"title": "General questions",
		"subtitle": "Frequently asked questions about Invoiss Platform and General use:",
		"qNas": [
			{
				"question": "Is Invoiss platform safe?",
				"answer": "Yes, security of your data is our priority. The invoiss platform uses Secure Sockets Layer (SSL) certificate. “HTTPS” is an encryption-based internet security protocol that encrypts your sensitive data in transit over the internet."
			},
			{
				"question": "How is my personal and company privacy handled?",
				"answer": "Invoiss is an accounting software and your privacy protection is a core value of what we do. We do NOT sell or share any of your information with any third party and all your information is password-protected. Only registered Invoiss support staff have access to this information strictly for the purpose of better supporting your account. You will be able to edit or delete your information at any time."
			},
			{
				"question": "How can I upload my items to my Invoiss account?",
				"answer": "You have two options:",
				"options": [
					"You can upload your items using bulk uploading or one at the time. Very easy tool to use!",
					"Or send us your items, and we will upload them to your account within 2 business days."
				]
			},
			{
				"question": "Does invoiss charge on transaction fees?",
				"answer": "No, Invoiss does not charge any fee on the payments you receive from your client and does not charge your client any fees. The transaction fee is charged by your credit card processor, you can view their fees on their platform. Stripe fees Clover fees"
			}
		]
		
	},
	{
		"title": "Estimates and Invoices",
		"subtitle": "Questions and issues related to Estimates and Invoices",
		"qNas": [
			{
				"question": "Do I get notified when my clients view their estimates and invoices?",
				"answer": "Yes, view the history of each estimate, invoice and order as to When and where they are viewed, opened, and paid."
			},
			{
				"question": "Can I communicate with my client?",
				"answer": "Yes, Invoiss has live chat system which is designed to allow you and your clients to chat in real time."
				
			},
			{
				"question": "Can my clients pay for their invoices online?",
				"answer": "Yes, your clients will have a payment button to pay for their invoices online with a credit card or debit card."
				
			},
			{
				"question": "Is file attachment available?",
				"answer": "Yes, you can attach files and images to your invoices, estimates, and orders."
				
			}
		]
		
	},
	
	{
		"title": "Inventory Management",
		"subtitle": "Questions and issues related to Inventory Section",
		"qNas": [
			{
				"question": "How can I set up my Inventory?",
				"answer": "You add your inventory items and generate barcodes for them in one click, then print and snap the barcodes to your items . Invoiss app allows you to scan the barcode with your phone camera and add quantity. It's designed for a fast and accurate inventory process."
			},
			{
				"question": "Can multiple people take one inventory?",
				"answer": "Yes, Invoiss inventory process is designed for simultaneous scanning, for instance if one barcode is scanned and you or someone else scan the same barcode which will add to the entered quantity from previous scan. This allows multi-scanning and would make the inventory process even faster."
			}
		
		]
		
	},
	
	{
		"title": "Vendor Ordering",
		"subtitle": "Questions and issues related to Vendor Ordering",
		"qNas": [
			{
				"question": "Do I need to inform my supplier about using Invoiss as my purchasing platform?",
				"answer": "No, not required. Once you add your vendors with their items you can send a test order and then follow up with them."
			},
			{
				"question": "How can I upload my suppliers’ items?",
				"answer": "We made it simple; you have three options;",
				"options": [
					"You can upload your items using bulk uploading or one at the time.",
					"From the Invoiss purchasing page, enter your supplier’s information and submit Request items, your supplier will be able to upload your items for you.",
					"Send us your items and your suppliers’ information. We’ll set you up in 2 business days."
				]
				
			},
			{
				"question": "What happens after I send my purchase order?",
				"answer": "Your supplier will be able to confirm or decline the order, and Invoiss will notify you of any action immediately. Your vendor can also start a live chat communication with you."
				
			},
			{
				"question": "How does my vendor get my orders?",
				"answer": "Your vendor will receive your orders in a secure web page with a CSV file attachment for their internal usecase. We know what your vendor needs so we do it to eliminate mistakes in your orders."
				
			},
			{
				"question": "How can I check my received items?",
				"answer": "We call it receiving process, which means you now check what you received against what you ordered. This process is very streamline and easy to do, we do this so you can submit issues back to your vendors and they resolve them for you quicker."
				
			}
		
		]
		
	},
	
	{
		"title": "Order Management",
		"subtitle": "Questions and issues related to Order Management",
		"qNas": [
			{
				"question": "Can I place orders on the platform?",
				"answer": "Yes, Invoiss allows you to create orders for your customers, and that helps you to avoid stacking up papers on your desk. You can track your future orders or go back and see the past orders’ status."
			},
			{
				"question": "Can I view my online orders too?",
				"answer": "The short answer is “yes.” We are constantly growing and integrating point of sale systems into Invoiss platform. Currently, with the Clover point of sale system you can see your online orders. Let us know what POS you use and we will add that to our to-do list."
				
			},
			{
				"question": "Is the payment option available on the ordering platform?",
				"answer": "Yes, you can create orders for your clients and have them pay for the order themselves or ask for a credit card on the phone and charge on the fly."
				
			},
			{
				"question": "For how long are my orders recorded?",
				"answer": "Unlimited, you can create as many orders as you would like and keep them on your platform and of course, you can always delete any order you wish."
				
			}
		
		]
		
	}
];

function Help(props) {

	
	return (
			<>
				<Section backgroundColor={"#161c2d"} shapeType={"halfmoon"}>
					<Parallax scrollTarget={"#scroll-to"} height={"14rem"}>
						<Stack justifyContent={"center"} height={"100%"} my={2}>
							<Typography variant={"h2"} color={"text.white"}>Help Center</Typography>
						</Stack>
					</Parallax>
				</Section>
				
				<Section sx={{background: "linear-gradient(to right, #1CB5E0, #000046)", mt: -28}}>
					
					<Container sx={{py: 10}} id={"scroll-to"}>
						{
							questionAnswers && questionAnswers.map((qna, index) => {
								return (
										<Box mb={3} key={index}>
											<QuestionCard title={qna.title} subtitle={qna.subtitle} questionAnswers={qna.qNas}/>
										</Box>
								)
							})
						}
					</Container>
				</Section>
			</>
	);
}

export default Help;