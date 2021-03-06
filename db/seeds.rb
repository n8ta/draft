teamA = DraftTemplate.teamA
teamB = DraftTemplate.teamB

pick = DraftTemplate.pick
pick_cap = DraftTemplate.pick_cap
hero = DraftTemplate.hero
ban = DraftTemplate.ban

DraftTemplate.create(name: "Aeon of Storms",
                     template: {
                         players: [],
                         step: 0,
                         teams: {"A": {heros: [], players: []}, "B": {heros: [], players: []}},
                         heros: ["Balrog.Brutalizer",
                                 "Tychus.Findlay",
                                 "Lord.Zyrkhan",
                                 "Vorpal.Valedict",
                                 "Ironhide.Cain",
                                 "Omega.Starscream",
                                 "Fine.Brine",
                                 "Marine.King",
                                 "Justicar.Akasha",
                                 "Immortal.Solidus",
                                 "Primal.Dehaka",
                                 "Khyrak",
                                 "Pyro.Maniac",
                                 "Salacious.Yig",
                                 "Viron",
                                 "Vindicator.Alarak",
                                 "Geminus.Boros",
                                 "Prelate.Zeratul",
                                 "Vagabond.Darpa",
                                 "Shadow.Geminus",
                                 "Tiberius.Rancor",
                                 "Gabriel.Tosh",
                                 "Toximancer.Vespus",
                                 "EnTaro.Tassadar",
                                 "Molgloo.Grunty",
                                 "Terra.Nova",
                                 "Vergil.Nerazim",
                                 "Voltron.Leo",
                                 "Feral.Terminus",
                                 "Alpha.Crackling",
                                 "Penthos",
                                 "Savage.Avenger",
                                 "General.Warfield",
                                 "Huntress.Acral",
                                 "Thermo.Axiom",
                                 "Executrix.Artanis",
                                 "Rory.Swann",
                                 "Jim.Raynor",
                                 "Subterran.Unix",
                                 "Erekul.Sartonis",
                                 "Egon.Stetmann",
                                 "Garamond.Singsprocket",
                                 "Dustin.Brawler",
                                 "System.Cyprus",
                                 "Roulette.Jackson",
                                 "Hybrid.Maar",
                                 "Queen.Imperius",
                                 "Jakk.Summers",
                                 "Null.Disruptor",
                                 "Doctor.Geneva",
                                 "Greelus.Humankind",
                                 "Alexei.Stukov",
                                 "Emil.Narud",
                                 "Anthrax",
                                 "VoidBearer.Kuradel",
                                 "Psionic.Turraneth",
                                 "Ephemeral.Corona",],
                         banned_heros: [],
                         steps: [
                             pick_cap.call(teamA),
                             pick.call(teamA),
                             pick.call(teamB),
                             pick.call(teamB),
                             pick.call(teamA),
                             pick.call(teamA),
                             pick.call(teamB),
                             pick.call(teamB),
                             pick.call(teamA),

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
                             {type: DraftTemplate.actions[:done], team: "A"}
                         ]
                     }.to_json
)