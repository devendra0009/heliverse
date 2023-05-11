import React from 'react';
import CardItem from './CardItem';
import { RiTeamFill } from 'react-icons/ri';
import { connect } from 'react-redux';

const Team = ({ team }) => {
  console.log(team);
  return (
    <>
      <div className="flex items-center justify-center gap-3 text-3xl pt-8 text-emerald-400">
        <h1>Your Team</h1>
        <RiTeamFill />
      </div>
      <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {team.map((t) => (
          <CardItem item={t} i_am_team={true} />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  team: state.team
});
export default connect(mapStateToProps)(Team);
