import {
	FaChessBoard,
	FaReddit,
	FaBlog,
	FaCoins,
	FaGithub
} from 'react-icons/fa'
import {MdCardTravel, MdComputer} from 'react-icons/md'

import React from 'react'
import styled from 'styled-components'

function hobbyIconCheck(iconName, size) {
	if (iconName === 'Chess')
		return <FaChessBoard color='#fff' size={size} />
	else if (iconName === 'Carrom')
		return <FaCoins color='#fff' size={size} />
	else if (iconName === 'Reading Tech blogs')
		return <FaBlog color='#fff' size={size} />
	else if (iconName === 'Scrolling through Reddit and Discord disucssions')
		return <FaReddit color='#fff' size={size} />
	else if (iconName === 'Trying out new opensource projects')
		return <FaGithub color='#fff' size={size} />
}

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
	align-items: center;
	background-color: ${(props) => (props.index % 2 ? '#1d1d1d' : '#1d3557')};
`

const TD = styled.td`
	flex: 1;
	padding: 20px;
`

const HobbyIcon = styled.div`
	margin-left: 10px;
`

function Hobby({HobbyListVal}) {
	return (
		<Card>
			<Table>
				{HobbyListVal.map((Obj, index) => {
					return (
						<TR index={index} key={index}>
							<HobbyIcon className='hobbyIcon'>
								{hobbyIconCheck(Obj.title, '30px')}
							</HobbyIcon>
							<TD>{Obj.title}</TD>
						</TR>
					)
				})}
			</Table>
		</Card>
	)
}

export default Hobby
