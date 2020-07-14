teamA = DraftTemplate.teamA
teamB = DraftTemplate.teamB

pick = DraftTemplate.pick
hero = DraftTemplate.hero
ban = DraftTemplate.ban

DraftTemplate.create(name: "Aeon of Storms",
                     template: {
                         teamA: {heros: [], players: []},
                         teamB: {heros: [], players: []},
                         secretA: nil,
                         secretB: nil,
                         heros: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"],
                         steps: [
                             pick.call(teamA),
                             pick.call(teamB),
                             pick.call(teamB),
                             pick.call(teamA),
                             pick.call(teamA),
                             pick.call(teamB),
                             pick.call(teamB),
                             pick.call(teamA),
                             pick.call(teamA),
                             pick.call(teamB),

                             ban.call(teamA),
                             ban.call(teamB),
                             ban.call(teamA),
                             ban.call(teamB),
                             ban.call(teamA),
                             ban.call(teamB),

                             hero.call(teamA),
                             hero.call(teamB),
                             hero.call(teamB),
                             hero.call(teamA),
                             hero.call(teamA),
                             hero.call(teamB),

                             ban.call(teamA),
                             ban.call(teamB),

                             hero.call(teamA),
                             hero.call(teamB),
                             hero.call(teamA),
                             hero.call(teamB),
                         ]
                     }.to_json
)