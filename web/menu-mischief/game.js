const ui = {
  title: document.querySelector('#scene-title'),
  text: document.querySelector('#scene-text'),
  choices: document.querySelector('#choices'),
  log: document.querySelector('#log'),
  score: document.querySelector('#score'),
  energy: document.querySelector('#energy'),
  round: document.querySelector('#round'),
  restart: document.querySelector('#restart')
};

const ROOMS = [
  {
    name: 'Settings Cavern',
    description: 'Sliders echo in the distance. A mysterious checkbox blinks knowingly.',
    options: [
      {
        label: 'Toggle "Ultra Cozy Shadows"',
        score: 2,
        energy: 0,
        log: 'The shadows become so cozy that your stress takes a nap.'
      },
      {
        label: 'Open Audio Mixer Jukebox',
        score: 1,
        energy: -1,
        log: 'A kazoo solo invades every sound effect. It is glorious and slightly tiring.'
      },
      {
        label: 'Press the giant "Apply" stamp',
        score: 3,
        energy: -1,
        log: 'A rubber duck in a tie approves your life choices with a stamp.'
      }
    ]
  },
  {
    name: 'Inventory Drawer District',
    description: 'Backpacks, snack pockets, and one suspiciously tiny spoon compartment.',
    options: [
      {
        label: 'Sort by "Mostly Useful"',
        score: 2,
        energy: 0,
        log: 'Your items arrange themselves alphabetically, emotionally, and dramatically.'
      },
      {
        label: 'Equip Banana Peel Boots',
        score: 3,
        energy: -1,
        log: 'You moonwalk by accident and gain instant crowd support.'
      },
      {
        label: 'Inspect Pocket of Infinite Coupons',
        score: 1,
        energy: 1,
        log: 'You find a coupon for free confidence. It stacks.'
      }
    ]
  },
  {
    name: 'Pause Screen Plaza',
    description: 'Time is frozen except for a pigeon giving tactical advice.',
    options: [
      {
        label: 'Ask pigeon for strategy',
        score: 2,
        energy: 1,
        log: 'The pigeon suggests "more snacks, fewer panics." Sound wisdom.'
      },
      {
        label: 'Read motivational tooltip',
        score: 1,
        energy: 0,
        log: 'Tooltip: "You are 89% caffeine and 11% destiny."'
      },
      {
        label: 'Hit dramatic unpause',
        score: 3,
        energy: -1,
        log: 'Confetti cannons fire because you resumed with theatrical timing.'
      }
    ]
  },
  {
    name: 'Quest Board Hallway',
    description: 'Sticky notes everywhere. One says: "Hero needed. Must enjoy puns."',
    options: [
      {
        label: 'Accept quest: Return borrowed spatula',
        score: 2,
        energy: -1,
        log: 'Villagers cheer your dedication to kitchen justice.'
      },
      {
        label: 'Accept quest: Decode sandwich map',
        score: 3,
        energy: -1,
        log: 'The map leads to treasure and an aggressively polite deli.'
      },
      {
        label: 'Decline politely with jazz hands',
        score: 1,
        energy: 1,
        log: 'The board respects boundaries and awards you a hydration sticker.'
      }
    ]
  }
];

const state = {
  score: 0,
  energy: 5,
  round: 1,
  roomIndex: 0,
  over: false
};

function addLog(message, tone = '') {
  const item = document.createElement('li');
  item.textContent = message;
  if (tone) {
    item.className = tone;
  }
  ui.log.prepend(item);

  while (ui.log.childNodes.length > 7) {
    ui.log.removeChild(ui.log.lastChild);
  }
}

function shuffledOptions(options) {
  return [...options].sort(() => Math.random() - 0.5);
}

function renderHud() {
  ui.score.textContent = state.score;
  ui.energy.textContent = state.energy;
  ui.round.textContent = state.round;
}

function renderRoom() {
  const room = ROOMS[state.roomIndex % ROOMS.length];
  ui.title.textContent = room.name;
  ui.text.textContent = room.description;
  ui.choices.innerHTML = '';

  shuffledOptions(room.options).forEach((option) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = option.label;
    button.disabled = state.over;

    button.addEventListener('click', () => {
      if (state.over) {
        return;
      }

      state.score += option.score;
      state.energy += option.energy;
      addLog(option.log, option.energy > 0 ? 'good' : option.energy < 0 ? 'warn' : '');

      const randomEventRoll = Math.random();
      if (randomEventRoll > 0.75) {
        state.score += 2;
        addLog('Bonus event: A menu goblin gives you two emergency giggles.', 'good');
      } else if (randomEventRoll < 0.15) {
        state.energy -= 1;
        addLog('Oops event: You clicked a tiny ad for novelty socks. Mildly distracting.', 'warn');
      }

      state.round += 1;
      state.roomIndex += 1;

      if (state.energy <= 0) {
        state.over = true;
        ui.title.textContent = 'Run Complete: Out of Energy';
        ui.text.textContent = 'You did your best menu acrobatics. Take a snack break and try again.';
        addLog(`Final score: ${state.score} giggles collected.`, 'good');
      }

      if (state.round > 10 && !state.over) {
        state.over = true;
        ui.title.textContent = 'Run Complete: Master of Menus';
        ui.text.textContent = 'You survived ten rounds of menu chaos and became a certified UI comedian.';
        addLog(`Final score: ${state.score} giggles collected. Legendary!`, 'good');
      }

      renderHud();
      renderRoom();
    });

    ui.choices.append(button);
  });
}

function resetGame() {
  state.score = 0;
  state.energy = 5;
  state.round = 1;
  state.roomIndex = 0;
  state.over = false;
  ui.log.innerHTML = '';
  addLog('New run started. The menus are stretching for warmups.');
  renderHud();
  renderRoom();
}

ui.restart.addEventListener('click', resetGame);
resetGame();
