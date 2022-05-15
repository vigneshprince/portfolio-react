import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
	color: #1d1d1d;
`

const Table = styled.table`
	width: 100%;
	background-color: #1d1d1d;
	color: #fff;
	border-radius: 11px;
	overflow: hidden;
`
const TR = styled.tr`
	display: flex;
	background-color: ${(props) => (props.index % 2 ? '#1d1d1d' : '#1d3557')};
`

const TD = styled.td`
	flex: 1;
	padding: 20px;
`

const Progress_div = styled.div`
height: 20px;
position: relative;
background: rgb(243, 239, 239);
-moz-border-radius: 25px;
-webkit-border-radius: 25px;
border-radius: 25px;
`

const Progress_span = styled.span`
display: block;
height: 100%;
border-top-right-radius: 6px;
border-bottom-right-radius: 6px;
border-top-left-radius: 20px;
border-bottom-left-radius: 20px;
background-color: #aaa5ff;
position: relative;
overflow: hidden;
`

function CodeList({ CodeListVal }) {
	return (
		<Card>
			<Table>
				{CodeListVal.map((Obj, index) => {
					return (
						<div key={index}>
							<TR index={index}>
								<TD>{Obj.title}</TD>
								<TD>{Obj.level}</TD>
								<TD>
									<Progress_div>
										<Progress_span style={{width: Obj.progressPercentage}}></Progress_span>
									</Progress_div>
									</TD>
							</TR>
						</div>
					)
				})}
			</Table>
		</Card>
	)
}

export default CodeList
