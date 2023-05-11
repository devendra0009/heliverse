import React from 'react';
import { ImPlus } from 'react-icons/im';
import { connect } from 'react-redux';

const CardItem = ({ item, add_to_team, team, i_am_team }) => {
  const handleClick = () => {
    console.log(item);
    const match = team.some((t) => t.id === item.id);
    if (item.available && !match) add_to_team(item);
    else alert('User Not Available or It is In the Team Already');
  };
  return (
    <div class="w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg relative">
      <div class="mt-6 w-fit mx-auto bg-emerald-400 rounded-full">
        <img src={item.avatar} alt="Avatar" />
      </div>

      <div class="mt-8 ">
        <h2 class="text-white font-bold text-xl tracking-wide">
          {item.first_name} {item.last_name}
        </h2>
      </div>
      <p class="text-emerald-400 font-semibold mt-2.5 truncate">{item.email}</p>
      <p class="text-emerald-400 font-semibold mt-2.5">{item.domain}</p>

      <div class="mt-3 text-white text-sm ">
        <span class="text-gray-400  font-semibold">{item.gender}</span>
      </div>
      {item.available ? (
        <span className="text-green-500 text-xl absolute top-3 ">o</span>
      ) : (
        <span className="text-red-500 text-xl absolute top-3 ">o</span>
      )}
      {!i_am_team && (
        <span
          className="absolute bottom-6 cursor-pointer right-8 text-2xl"
          onClick={handleClick}
        >
          <ImPlus />
        </span>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    add_to_team: (data) =>
      dispatch({
        type: 'ADD_TO_TEAM',
        payload: data,
      }),
  };
};
const mapStateToProps = (state) => ({
  team: state.team,
});
export default connect(mapStateToProps, mapDispatchToProps)(CardItem);
