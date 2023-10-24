import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Friend {
  id: string;
  location: string;
  account: string;
  isFollowing: boolean;
  avatar: string;
}

interface InitialState {
  friends: Friend[];
}

const initialState: InitialState = {
  friends: [
    {
      id: '1',
      location: 'Taiwan',
      account: 'max_123',
      isFollowing: false,
      avatar: '/images/avatars/a4.png'
    },
    {
      id: '2',
      location: 'Taiwan',
      account: 'fm_457',
      isFollowing: false,
      avatar: '/images/avatars/a5.png'
    },
    {
      id: '3',
      location: 'Taiwan',
      account: 'joanne_987',
      isFollowing: true,
      avatar: '/images/avatars/a6.png'
    },
    {
      id: '4',
      location: 'Taipei',
      account: 'focus_123',
      isFollowing: true,
      avatar: '/images/avatars/a4.png'
    },
    {
      id: '5',
      location: 'Hsinchu',
      account: 'alvin_123',
      isFollowing: true,
      avatar: '/images/avatars/a5.png'
    },
    {
      id: '6',
      location: 'Hsinchu',
      account: 'grace_123',
      isFollowing: true,
      avatar: '/images/avatars/a6.png'
    },
    {
      id: '7',
      location: 'Hsinchu',
      account: 'rance_123',
      isFollowing: true,
      avatar: '/images/avatars/a7.png'
    },
    {
      id: '8',
      location: 'Hsinchu',
      account: 'louis_123',
      isFollowing: true,
      avatar: '/images/avatars/a8.png'
    },
    {
      id: '9',
      location: 'Hsinchu',
      account: 'hank_123',
      isFollowing: true,
      avatar: '/images/avatars/a9.png'
    }
  ]
};

export const friendSlice = createSlice({
  name: 'friendsList',
  initialState,
  reducers: {
    follow: (state, action: PayloadAction<string>) => {
      const { friends } = state;
      for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if (friend.id === action.payload) {
          friend.isFollowing = true;
          break;
        }
      }
    },
    unFollow: (state, action: PayloadAction<string>) => {
      const { friends } = state;
      for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if (friend.id === action.payload) {
          friend.isFollowing = false;
          break;
        }
      }
    }
  }
});

// Action creators are generated for each case reducer function
export const { follow, unFollow } = friendSlice.actions;

export default friendSlice.reducer;
