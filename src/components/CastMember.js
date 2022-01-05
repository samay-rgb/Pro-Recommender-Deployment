import React from "react";
import styled from "styled-components";
export default function CastMember({ member }) {
  return (
    <div className="member">
      <Image
        src={`https://image.tmdb.org/t/p/w500/${member.profile_path}`}
        alt=""
      />
      <p>{member.name}</p>
    </div>
  );
}
const Image = styled.img`
  display: block;
  height: 300px;
  border-radius: 15px;
`;
