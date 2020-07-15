import PropTypes from 'prop-types';

export const StepType = PropTypes.shape({
    team: PropTypes.string,
    action: PropTypes.string,
})

export const UserType = PropTypes.shape({
    uuid: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
})

export const ActionType =
    PropTypes.oneOf(["PICK_CAPTAIN","PICK_PLAYER","PICK_HERO","BAN_HERO","DONE"])

export const Actions = {
    PICK_CAPTAIN: "PICK_CAPTAIN",
    PICK_PLAYER: "PICK_PLAYER",
    PICK_HERO: "PICK_HERO",
    BAN_HERO: "BAN_HERO",
    DONE: "DONE",
}

export const TeamActionType = PropTypes.shape({
    team: PropTypes.oneOf(["A","B"]),
    action: ActionType
    }
)