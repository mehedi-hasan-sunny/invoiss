import React from 'react';
import PropTypes from 'prop-types';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Card,
	CardContent,
	Stack,
	Typography
} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";
import Pill from "../styled/component/Pill";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

QuestionCard.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	questionAnswers: PropTypes.array.isRequired,
};

const styles = (theme) => (
		{
			card: {
				background: 'rgb(255,255,255,0.2) !important',
				border: '1px solid #fff',
				borderRadius: '10px',
				"&:hover": {
					boxShadow: theme.shadows[10]
				}
			},
			cardHeader: {
				padding: '1rem !important',
			},
			cardContent: {
				padding: '0 1rem 1rem !important'
			}
		}
)


function QuestionCard(props) {
	const {
		classes,
		title,
		subtitle,
		questionAnswers,
	} = props;
	const [expanded, setExpanded] = React.useState('');
	
	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};
	return (
			<Card variant="outlined" className={classes.card}>
				<Stack p={"1rem"} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
					<Box>
						<Typography variant={"h5"} fontWeight={"bold"}>
							{title}
						</Typography>
						<Typography variant={"small"} color={"text.purple-dark"}>
							{subtitle}
						</Typography>
					</Box>
					<Pill
							backgroundColor={"purple"}>{questionAnswers && questionAnswers.length ? questionAnswers.length : 0} Answers</Pill>
				</Stack>
				<CardContent className={classes.cardContent}>
					{
						questionAnswers && questionAnswers.map((qna, index) => {
							return (
									<Accordion
											elevation={0}
											key={"panel"+index} sx={{background: "transparent"}}
											expanded={expanded === 'panel' + index}
											onChange={handleChange('panel' + index)}>
										<AccordionSummary
												expandIcon={<ExpandMoreIcon/>}
												aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
											<Typography fontSize={"1.2rem"}>{qna.question}</Typography>
										</AccordionSummary>
										<AccordionDetails>
											<Typography variant={"h6"} color={"text.white"}>
												{qna.answer}
											</Typography>
											{
												qna.options ?
														(
																<ol>
																	{
																		qna.options.map((option, i) => (<li key={i}>{option}</li>))
																	}
																</ol>
														) : null
											}
										
										</AccordionDetails>
									</Accordion>
							)
						})
					}
				</CardContent>
			</Card>
	);
}

export default withStyles(styles)(QuestionCard);