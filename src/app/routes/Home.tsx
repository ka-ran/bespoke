import React from "react";
import { FilterMembers } from "../components/filter-members/FilterMembers";
import { MembersList } from "../components/members-list/MembersList";
import { SearchInput } from "../components/search-input/SearchInput";
import { fetchMembers } from "../repo/members/DummyMembersApi";
import Member from "../repo/members/Member";
import { Row } from "../utils/components/row/Row";
import { getRating } from "../utils/helper-functions/RatingAlgorithm";

interface Props {}

interface MembersApiResponse {
  data?: Member[];
  isLoading: boolean;
  error?: string;
}

interface State {
  searchInput: string | null;
  members: MembersApiResponse;
}

let initialState: State = {
  searchInput: null,
  members: {
    isLoading: true,
  },
};

type Action =
  | { type: "SetMembers"; data: Member[] }
  | { type: "SetSearchInput"; value: string }
  | { type: "RemoveMember"; memberId: string }
  | { type: "SelectFilter"; filterType: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SetMembers":
      return {
        ...state,
        members: {
          data: action.data,
          isLoading: false,
        },
      };
    case "SetSearchInput":
      return {
        ...state,
        searchInput: action.value === "" ? null : action.value,
      };
    case "RemoveMember":
      let newMembers = state.members.data?.filter(
        ({ id }) => id !== action.memberId
      );
      return {
        ...state,
        members: {
          ...state.members,
          data: newMembers?.map((member) => ({
            ...member,
            raiting: getRating(),
          })),
        },
      };
    case "SelectFilter":
      return {
        ...state,
        members: {
          ...state.members,
          data:
            action.filterType !== "none"
              ? state.members.data?.filter((member) =>
                  member.activities.includes(action.filterType)
                )
              : state.members.data,
        },
      };
  }
};

let getSearchedMembers = (
  searchTerm: string | null,
  members: MembersApiResponse
) => {
  return searchTerm && members.data
    ? {
        ...members,
        data: members.data?.filter(({ name }) =>
          name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      }
    : members;
};

const Home = (_: Props) => {
  let [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    dispatch({ type: "SetMembers", data: fetchMembers() });
  }, []);

  return (
    <div>
      <Row>
        <SearchInput
          searchTerm={state.searchInput}
          onChange={(value) => dispatch({ type: "SetSearchInput", value })}
        />
        <FilterMembers onFilterSelect={(_activity) => null} />
        <div>Count: {state.members.data?.length}</div>
      </Row>
      <MembersList
        members={getSearchedMembers(state.searchInput, state.members)}
        onMemberRemove={(memberId) =>
          dispatch({ type: "RemoveMember", memberId })
        }
      />
    </div>
  );
};

export default Home;
