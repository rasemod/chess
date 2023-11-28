document.onload = (function () {
  const rook_b = `<svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 	width="80px" height="80px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
		<path d="M31,25V10h7v6h6v-6h12v6h6v-6h7v15c0,2.2-1.8,4-4,4H35C32.8,29,31,27.2,31,25z M65,34c1.1,0,2-0.9,2-2s-0.9-2-2-2H35
		c-1.1,0-2,0.9-2,2s0.9,2,2,2H65z M30,84h40c1.1,0,2-0.9,2-2s-0.9-2-2-2H30c-1.1,0-2,0.9-2,2S28.9,84,30,84z M73,85H27
		c-2.2,0-4,1.8-4,4s1.8,4,4,4h46c2.2,0,4-1.8,4-4S75.2,85,73,85z M68.262,79C66.464,72.752,62,70.139,62,35H38
		c0,35.139-4.464,37.752-6.262,44H68.262z"/>
	</svg>`;
  const knight_b = `<svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 width="80px" height="80px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
<path d="M31.375,40.219l1.249,1.563l-5.475,4.379C27.676,48.357,29.645,50,32,50c2.527,0,4.622-1.885,4.954-4.32l5.849-2.508
	c2.944,2.451,7.337,2.297,10.097-0.465c2.924-2.924,2.924-7.682,0-10.606l0.707-0.707c1.605,1.605,2.49,3.739,2.49,6.011
	c0,1.328-0.311,2.607-0.884,3.764l0,0c-0.196,0.396-0.425,0.775-0.681,1.14c-0.024,0.034-0.05,0.066-0.074,0.1
	c-0.256,0.353-0.536,0.692-0.851,1.007c-0.276,0.276-0.57,0.523-0.873,0.752c-0.07,0.053-0.143,0.101-0.213,0.15
	c-0.252,0.179-0.51,0.344-0.775,0.492c-1.508,0.844-3.216,1.203-4.894,1.057C45.944,52.158,40.545,57,34,57l2,22h28
	c0-9.957,2.698-18.563,5.535-25.822C64.908,57.412,58.751,60,52,60v-1c13.785,0,25-11.215,25-25S65.785,9,52,9h-1v10h-1v-4h-7
	c-3.866,0-7,3.134-7,7c0,1.831-16,7.76-16,16c0,3.38,2.395,6.199,5.58,6.855L31.375,40.219z M45.485,20.143l1.029,1.715l-5,3
	l-1.029-1.715L45.485,20.143z M23.445,38.168l3-2l1.109,1.664l-3,2L23.445,38.168z M69,80c1.1,0,2,0.9,2,2s-0.9,2-2,2H31
	c-1.1,0-2-0.9-2-2s0.9-2,2-2H69z M76,89c0,2.2-1.8,4-4,4H28c-2.2,0-4-1.8-4-4s1.8-4,4-4h44C74.2,85,76,86.8,76,89z"/>
</svg>`;
  const pawn_w = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 width="80px" height="80px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
    <g>
	<g>
		<path fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" d="M73,89c0,2.2-1.8,4-4,4H31c-2.2,0-4-1.8-4-4l0,0
			c0-2.2,1.8-4,4-4h38C71.2,85,73,86.8,73,89L73,89z"/>
	</g>
	<circle fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" cx="50" cy="22" r="13"/>
	<g>
		<path fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" d="M63,38c0,1.65-1.35,3-3,3H40c-1.65,0-3-1.35-3-3
			l0,0c0-1.65,1.35-3,3-3h20C61.65,35,63,36.35,63,38L63,38z"/>
	</g>
	<g>
		<path fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" d="M68,82c0,1.65-1.35,3-3,3H35c-1.65,0-3-1.35-3-3
			l0,0c0-1.65,1.35-3,3-3h30C66.65,79,68,80.35,68,82L68,82z"/>
	</g>
	<path fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" d="M63.99,79C62.052,74.959,58,74.478,58,41H42
		c0,33.478-4.052,33.959-5.99,38H63.99z"/>
    </g>
    </svg>`;
  const bishop_b = `<svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 width="80px" height="80px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
<path d="M37,40c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2s-0.9,2-2,2H39C37.9,42,37,41.1,37,40z M34,84h32c1.1,0,2-0.9,2-2s-0.9-2-2-2H34
	c-1.1,0-2,0.9-2,2S32.9,84,34,84z M69,85H31c-2.2,0-4,1.8-4,4s1.8,4,4,4h38c2.2,0,4-1.8,4-4S71.2,85,69,85z M40.95,43
	c-0.358,27.588-2.586,30.262-3.528,36h25.156c-0.942-5.738-3.17-8.412-3.528-36H40.95z M59,37c0,0,4-6,4-11
	c0-4.411-10.112-13.488-12.496-19h-1.008c-0.871,2.015-2.776,4.506-4.842,7.072l4.24,8.48l-1.789,0.895l-3.834-7.668
	C40.1,19.686,37,23.558,37,26c0,5,4,11,4,11H59z"/>
</svg>`;
  const king_b = `<svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 width="80px" height="80px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
<path d="M37,36c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2s-0.9,2-2,2H39C37.9,38,37,37.1,37,36z M34,84h32c1.1,0,2-0.9,2-2s-0.9-2-2-2H34
	c-1.1,0-2,0.9-2,2S32.9,84,34,84z M69,85H31c-2.2,0-4,1.8-4,4s1.8,4,4,4h38c2.2,0,4-1.8,4-4S71.2,85,69,85z M37,20l0.615,2h24.77
	L63,20l-11-4.23V11h2V7h-2V5h-4v2h-2v4h2v4.77L37,20z M59,33l3.077-10H37.923L41,33H59z M40.973,39
	c-0.277,29.941-2.637,33.514-3.583,40H62.61c-0.946-6.486-3.306-10.059-3.583-40H40.973z"/>
</svg>`
  const pawn_b = `<svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 width="80px" height="80px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
<path d="M37,38c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2s-0.9,2-2,2H39C37.9,40,37,39.1,37,38z M34,84h32c1.1,0,2-0.9,2-2s-0.9-2-2-2H34
	c-1.1,0-2,0.9-2,2S32.9,84,34,84z M69,85H31c-2.2,0-4,1.8-4,4s1.8,4,4,4h38c2.2,0,4-1.8,4-4S71.2,85,69,85z M50,35
	c7.18,0,13-5.82,13-13S57.18,9,50,9s-13,5.82-13,13S42.82,35,50,35z M58,41H42c0,33.478-4.052,33.959-5.99,38H63.99
	C62.052,74.959,58,74.478,58,41z"/>
</svg>`
  const queen_b = `<svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 width="80px" height="80px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
<path d="M63,36c0,1.1-0.9,2-2,2H39c-1.1,0-2-0.9-2-2s0.9-2,2-2h22C62.1,34,63,34.9,63,36z M34,84h32c1.1,0,2-0.9,2-2s-0.9-2-2-2H34
	c-1.1,0-2,0.9-2,2S32.9,84,34,84z M69,85H31c-2.2,0-4,1.8-4,4s1.8,4,4,4h38c2.2,0,4-1.8,4-4S71.2,85,69,85z M40.973,39
	c-0.277,29.941-2.637,33.514-3.583,40H62.61c-0.946-6.486-3.306-10.059-3.583-40H40.973z M34.965,23l3.89,10h22.291l3.89-10H34.965z
	 M65.424,22l2.44-6.275l-3.729-1.449l-1.361,3.501c-1.851-0.886-5.641-1.543-10.218-1.724C53.432,15.318,54,14.23,54,13
	c0-2.209-1.791-4-4-4s-4,1.791-4,4c0,1.23,0.568,2.318,1.443,3.053c-4.577,0.181-8.367,0.838-10.218,1.724l-1.361-3.501
	l-3.729,1.449L34.576,22H65.424z"/>
</svg>`
  const bishop_w = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 width="80px" height="80px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
<g>
	<g>
		<path fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" d="M73,89c0,2.2-1.8,4-4,4H31c-2.2,0-4-1.8-4-4l0,0
			c0-2.2,1.8-4,4-4h38C71.2,85,73,86.8,73,89L73,89z"/>
	</g>
	<g>
		<path fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" d="M63,40c0,1.65-1.35,3-3,3H40c-1.65,0-3-1.35-3-3
			l0,0c0-1.65,1.35-3,3-3h20C61.65,37,63,38.35,63,40L63,40z"/>
	</g>
	<g>
		<path fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" d="M68,82c0,1.65-1.35,3-3,3H35c-1.65,0-3-1.35-3-3
			l0,0c0-1.65,1.35-3,3-3h30C66.65,79,68,80.35,68,82L68,82z"/>
	</g>
	<path fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" d="M50,5c0,5-13,16-13,21s4,11,4,11h18c0,0,4-6,4-11
		S50,10,50,5z"/>
	<line fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" x1="48" y1="23" x2="44" y2="15"/>
	<path fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" d="M62.578,79c-0.942-5.738-3.17-8.413-3.528-36h-18.1
		c-0.358,27.587-2.586,30.262-3.528,36H62.578z"/>
</g>
</svg>`
  const king_w = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 width="80px" height="80px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve" fill="white">
<g>
	<g>
		<path fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" d="M73,89c0,2.2-1.8,4-4,4H31c-2.2,0-4-1.8-4-4l0,0
			c0-2.2,1.8-4,4-4h38C71.2,85,73,86.8,73,89L73,89z"/>
	</g>
	<g>
		<path fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" d="M63,36c0,1.65-1.35,3-3,3H40c-1.65,0-3-1.35-3-3
			l0,0c0-1.65,1.35-3,3-3h20C61.65,33,63,34.35,63,36L63,36z"/>
	</g>
	<g>
		<path fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" d="M68,82c0,1.65-1.35,3-3,3H35c-1.65,0-3-1.35-3-3
			l0,0c0-1.65,1.35-3,3-3h30C66.65,79,68,80.35,68,82L68,82z"/>
	</g>
	<polygon fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" points="63,20 59,33 41,33 37,20 50,15 	"/>
	<line fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" x1="50" y1="15" x2="50" y2="5"/>
	<line fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" x1="46" y1="9" x2="54" y2="9"/>
	<line fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" x1="38" y1="23" x2="62" y2="23"/>
	<path fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" d="M62.61,79c-0.946-6.487-3.306-10.059-3.583-40
		H40.973c-0.277,29.941-2.637,33.513-3.583,40H62.61z"/>
</g>
</svg>`
  const knight_w = `<svg fill="white" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 width="80px" height="80px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
<path stroke="#000000" stroke-width="3" d="M31.375,40.219l1.249,1.563l-5.475,4.379C27.676,48.357,29.645,50,32,50c2.527,0,4.622-1.885,4.954-4.32l5.849-2.508
	c2.944,2.451,7.337,2.297,10.097-0.465c2.924-2.924,2.924-7.682,0-10.606l0.707-0.707c1.605,1.605,2.49,3.739,2.49,6.011
	c0,1.328-0.311,2.607-0.884,3.764l0,0c-0.196,0.396-0.425,0.775-0.681,1.14c-0.024,0.034-0.05,0.066-0.074,0.1
	c-0.256,0.353-0.536,0.692-0.851,1.007c-0.276,0.276-0.57,0.523-0.873,0.752c-0.07,0.053-0.143,0.101-0.213,0.15
	c-0.252,0.179-0.51,0.344-0.775,0.492c-1.508,0.844-3.216,1.203-4.894,1.057C45.944,52.158,40.545,57,34,57l2,22h28
	c0-9.957,2.698-18.563,5.535-25.822C64.908,57.412,58.751,60,52,60v-1c13.785,0,25-11.215,25-25S65.785,9,52,9h-1v10h-1v-4h-7
	c-3.866,0-7,3.134-7,7c0,1.831-16,7.76-16,16c0,3.38,2.395,6.199,5.58,6.855L31.375,40.219z M45.485,20.143l1.029,1.715l-5,3
	l-1.029-1.715L45.485,20.143z M23.445,38.168l3-2l1.109,1.664l-3,2L23.445,38.168z M69,80c1.1,0,2,0.9,2,2s-0.9,2-2,2H31
	c-1.1,0-2-0.9-2-2s0.9-2,2-2H69z M76,89c0,2.2-1.8,4-4,4H28c-2.2,0-4-1.8-4-4s1.8-4,4-4h44C74.2,85,76,86.8,76,89z"/>
</svg>`;
  const queen_w = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 width="80px" height="80px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
<g>
	<g>
		<path fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" d="M73,89c0,2.2-1.8,4-4,4H31c-2.2,0-4-1.8-4-4l0,0
			c0-2.2,1.8-4,4-4h38C71.2,85,73,86.8,73,89L73,89z"/>
	</g>
	<g>
		<path fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" d="M63,36c0,1.65-1.35,3-3,3H40c-1.65,0-3-1.35-3-3
			l0,0c0-1.65,1.35-3,3-3h20C61.65,33,63,34.35,63,36L63,36z"/>
	</g>
	<g>
		<path fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" d="M68,82c0,1.65-1.35,3-3,3H35c-1.65,0-3-1.35-3-3
			l0,0c0-1.65,1.35-3,3-3h30C66.65,79,68,80.35,68,82L68,82z"/>
	</g>
	<polyline fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" points="34,15 41,33 59,33 66,15 	"/>
	<path fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" d="M36,20c0-1.657,6.268-3,14-3s14,1.343,14,3"/>
	<circle fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" cx="50" cy="13" r="4"/>
	<line fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" x1="37" y1="23" x2="63" y2="23"/>
	<path fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" d="M62.61,79c-0.946-6.487-3.306-10.059-3.583-40
		H40.973c-0.277,29.941-2.637,33.513-3.583,40H62.61z"/>
</g>
</svg>`
  const rook_w = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 width="80px" height="80px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
<g>
	<g>
		<path fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" d="M77,89c0,2.2-1.8,4-4,4H27c-2.2,0-4-1.8-4-4l0,0
			c0-2.2,1.8-4,4-4h46C75.2,85,77,86.8,77,89L77,89z"/>
	</g>
	<g>
		<path fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" d="M67,32c0,1.65-1.35,3-3,3H36c-1.65,0-3-1.35-3-3
			l0,0c0-1.65,1.35-3,3-3h28C65.65,29,67,30.35,67,32L67,32z"/>
	</g>
	<g>
		<path fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" d="M72,82c0,1.65-1.35,3-3,3H31c-1.65,0-3-1.35-3-3
			l0,0c0-1.65,1.35-3,3-3h38C70.65,79,72,80.35,72,82L72,82z"/>
	</g>
	<g>
		<path fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" d="M31,10v16c0,1.65,1.35,3,3,3h32c1.65,0,3-1.35,3-3
			V10"/>
	</g>
	<polyline fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" points="69,16 69,10 62,10 62,16 56,16 56,10 
		44,10 44,16 38,16 38,10 31,10 31,16 	"/>
	<path fill="white" stroke="#000000" stroke-width="4" stroke-miterlimit="10" d="M68.262,79C66.464,72.751,62,70.139,62,35H38
		c0,35.139-4.464,37.751-6.262,44H68.262z"/>
</g>
</svg>`

  const gameboard = document.querySelector(".chessboard");
  const numbers = document.querySelector(".numbers");
  const letters = document.querySelector(".letters");
  const currentTime = document.querySelector(".current-time");
  const buttonStart = document.querySelector(".start");
  const buttonFinish = document.querySelector(".finish");
  const startTimeElement = document.querySelector(".start-time");
  const durationGameElement = document.querySelector(".duration");
  const body = document.querySelector("body");

  let white = true;
  let letter = "ABCDEFGH";

  const imagesMap = {};

  class Figure {
    position = null;
    constructor({ name, id, initPosition, svg }) {
      this.name = name;
      this.id = id;
      this.initPosition = initPosition;
      this.svg = svg;
    }
  }

  class Board {
    arrChar = ["a", "b", "c", "d", "e", "f", "g", "h"];
    board = {};
    white = true;
    figures = [];
    constructor(gameboard) {
      let j = 1;
      for (let i = 8; i > 0; i--) {
        for (let c of this.arrChar) {
          this.board[c + String(i)] = {
            color: !this.white ? "black" : "white",
            content: null,
          };

          this.white = !this.white;

          if (j % 8 === 0) {
            this.white = !this.white;
          }
          j++;
        }
      }
      this.gameboard = gameboard;
      this.init();
      this.initRender()
      console.log(this.board)
    }

    getNumByChar(char) {
      return this.arrChar.indexOf(char)
    }

    getCharByNum(num) {
      return this.arrChar[num]
    }

    getSquareContent(activeFig, posibility) {
      console.log(activeFig, posibility)
      const positionX = this.getNumByChar(activeFig.position.charAt(0))
      const positionY = parseInt(activeFig.position.charAt(1)) - 1

      document.querySelectorAll('.square.possible').forEach((element) => {
        element.classList.remove('possible') 
      })  

      for (let posible of posibility) {

        const pos = this.getCharByNum(positionX + posible[0]) + (+positionY + 1 + posible[1])
        const square = this.board[pos] 

        if (square) {
          document.querySelector(`[data-pos = '${pos}']`).classList.add('possible')
        }
        console.log(this.board[pos])  
      }

      /*return this.board [
          this.getCharByNum(posX) + (posY + 1)
        ].content*/
    }



    init() {
      const initSetup = [
        {
          name: "rook",
          id: "rook_b_1",
          initPosition: "a8",
          svg: rook_b,
        },
        {
          name: "rook",
          id: "rook_b_2",
          initPosition: "h8",
          svg: rook_b,
        },
        {
          name: "rook",
          id: "knight_b_1",
          initPosition: "b8",
          svg: knight_b,
        },
        {
          name: "rook",
          id: "knight_b_2",
          initPosition: "g8",
          svg: knight_b,
        },
        {
          name: "bishop",
          id: "bishop_b_1",
          initPosition: "c8",
          svg: bishop_b,
        },
        {
          name: "bishop",
          id: "bishop_b_2",
          initPosition: "f8",
          svg: bishop_b,
        },
        {
          name: "queen",
          id: "queen_b_1",
          initPosition: "d8",
          svg: queen_b,
        },
        {
          name: "king",
          id: "king_b_1",
          initPosition: "e8",
          svg: king_b,
        },
        {
          name: "pawn",
          id: "pawn_b_1",
          initPosition: "a7",
          svg: pawn_b,
        },
        {
          name: "pawn",
          id: "pawn_b_2",
          initPosition: "b7",
          svg: pawn_b,
        },
        {
          name: "pawn",
          id: "pawn_b_3",
          initPosition: "c7",
          svg: pawn_b,
        },
        {
          name: "pawn",
          id: "pawn_b_4",
          initPosition: "d7",
          svg: pawn_b,
        },
        {
          name: "pawn",
          id: "pawn_b_5",
          initPosition: "e7",
          svg: pawn_b,
        },
        {
          name: "pawn",
          id: "pawn_b_6",
          initPosition: "f7",
          svg: pawn_b,
        },
        {
          name: "pawn",
          id: "pawn_b_7",
          initPosition: "g7",
          svg: pawn_b,
        },
        {
          name: "pawn",
          id: "pawn_b_8",
          initPosition: "h7",
          svg: pawn_b,
        },
        {
          name: "rook",
          id: "rook_w_1",
          initPosition: "a1",
          svg: rook_w,
        },
        {
          name: "rook",
          id: "rook_w_2",
          initPosition: "h1",
          svg: rook_w,
        },
        {
          name: "knight",
          id: "knight_w_1",
          initPosition: "b1",
          svg: knight_w,
        },
        {
          name: "knight",
          id: "knight_w_2",
          initPosition: "g1",
          svg: knight_w,
        },
        {
          name: "bishop",
          id: "bishop_w_1",
          initPosition: "c1",
          svg: bishop_w,
        },
        {
          name: "bishop",
          id: "bishop_w_2",
          initPosition: "f1",
          svg: bishop_w,
        },
        {
          name: "queen",
          id: "queen_w_1",
          initPosition: "d1",
          svg: queen_w,
        },
        {
          name: "king",
          id: "king_w_1",
          initPosition: "e1",
          svg: king_w,
        },
        {
          name: "pawn",
          id: "pawn_w_1",
          initPosition: "a2",
          svg: pawn_w,
        },
        {
          name: "pawn",
          id: "pawn_w_2",
          initPosition: "b2",
          svg: pawn_w,
        },
        {
          name: "pawn",
          id: "pawn_w_3",
          initPosition: "c2",
          svg: pawn_w,
        },
        {
          name: "pawn",
          id: "pawn_w_4",
          initPosition: "d2",
          svg: pawn_w,
        },
        {
          name: "pawn",
          id: "pawn_w_5",
          initPosition: "e2",
          svg: pawn_w,
        },
        {
          name: "pawn",
          id: "pawn_w_6",
          initPosition: "f2",
          svg: pawn_w,
        },
        {
          name: "pawn",
          id: "pawn_w_7",
          initPosition: "g2",
          svg: pawn_w,
        },
        {
          name: "pawn",
          id: "pawn_w_8",
          initPosition: "h2",
          svg: pawn_w,
        }
      ];

      for (let figure of initSetup) {
        const newFigures = new Figure(figure);
        this.figures.push(newFigures);
        this.board[figure.initPosition].content = figure.id
      }
    }

    initRender() {
      const fragment = document.createDocumentFragment();
      for (let sq in this.board) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.innerText = sq;
        square.dataset.pos = sq

        if (this.board[sq].color === "black") {
          square.classList.add("black");
        }
        fragment.appendChild(square);
      }
      this.gameboard.appendChild(fragment);

      for (let figure of this.figures) {
        if (figure.position === null) {
          figure["position"] = figure.initPosition;
        }
        const [charX, posY] = figure.position.split("");
        const posX = this.arrChar.indexOf(charX);
        const element = document.createElement("div")
        element.innerHTML = figure.svg
        const parent = document.querySelector(`[data-pos = "${figure.position}"]`)
        const pos = parent.getBoundingClientRect()
        element.style.position = "fixed"
        element.style.top = pos.top + "px"
        element.style.left = pos.left + "px"
        element.classList.add("fig")
        element.id = figure.id
        const body = document.querySelector("body")
        body.appendChild(element)

      }

      body.addEventListener("click", (event) => {
        if (event.target.classList.contains("possible")) {
          if (activeFig) {
            activeFig.position = event.target.dataset.pos;
          
            function redrawChessboard() {
              
            }

            this.redrawChessboard();

          }
        }
        if (event.target.classList.contains("fig")) {
          console.log(event.target.id)
          const targetId = event.target.id
          const [activeFig] = this.figures.filter((element) => {
            if (element.id === targetId) {
              return true
            } else {
              return false
            }
          })
         // console.log(activeFig)

          const [nameFig, colorFig, numberFig] = activeFig.id.split("_")

          switch (nameFig) {
            case "pawn": 
            
            /* 
              [0,1] - просто пойти вперёд
              [-1,1] - бить влево
              [1,1] - бить вправо
              [0,2] - пойти вперёд на 2 клетки
            */

              

              if (colorFig === "w") {

                const posibilityWhitePawn = [[0,1], [-1,1], [1,1]]

                if (activeFig.position === activeFig.initPosition) { // можно ходить через одну клетку пешке
                  posibilityWhitePawn.push([0,2])
                }
                // создать подсвечивание ходов надо подсвечивать тольчо data-pos в htmL 
                this.getSquareContent(activeFig, posibilityWhitePawn)
              }
              
              break;
            case "knight":
              if (colorFig === "w") {
                console.log(colorFig, numberFig)

                const posibilityWhiteKnight = [[-2, -1], [-2, 1], [-1, -2], [-1, 2],[1, -2], [1, 2], [2, -1], [2, 1]];

                if (activeFig.position === activeFig.initPosition) {
                  console.log(activeFig.position.split(""))
                } else {

                }
              }
              break;
            case "king":
              if (colorFig === "w") {
                console.log(colorFig, numberFig)
                if (activeFig.position === activeFig.initPosition) {
                  console.log(activeFig.position.split(""))
                } else {

                }
              }
              break;
            case "queen":
              if (colorFig === "w") {
                console.log(colorFig, numberFig)
                if (activeFig.position === activeFig.initPosition) {
                  console.log(activeFig.position.split(""))
                } else {

                }
              }
              break;
            case "bishop":
              if (colorFig === "w") {
                console.log(colorFig, numberFig)
                if (activeFig.position === activeFig.initPosition) {
                  console.log(activeFig.position.split(""))
                } else {

                }
              }
              break;
            case "rook":
              if (colorFig === "w") {
                console.log(colorFig, numberFig)
                if (activeFig.position === activeFig.initPosition) {
                  console.log(activeFig.position.split(""))
                } else {

                }
              }
              break;
            case "pawn":
              if (colorFig === "b") {
                console.log(colorFig, numberFig)
                if (activeFig.position === activeFig.initPosition) { // можно ходить через одну клетку пешке
                  console.log(activeFig.position.split(""))
                } else { // можно ходить на клетку вперёд или бить по диагонали

                }
              }
              break;
            case "knight":
              if (colorFig === "b") {
                console.log(colorFig, numberFig)
                if (activeFig.position === activeFig.initPosition) {
                  console.log(activeFig.position.split(""))
                } else {

                }
              }
              break;
            case "king":
              if (colorFig === "b") {
                console.log(colorFig, numberFig)
                if (activeFig.position === activeFig.initPosition) {
                  console.log(activeFig.position.split(""))
                } else {
                }
              }
              break;
            case "queen":
              if (colorFig === "b") {
                console.log(colorFig, numberFig)
                if (activeFig.position === activeFig.initPosition) {
                  console.log(activeFig.position.split(""))
                } else {

                }
              }
              break;
            case "bishop":
              if (colorFig === "b") {
                console.log(colorFig, numberFig)
                if (activeFig.position === activeFig.initPosition) {
                  console.log(activeFig.position.split(""))
                } else {

                }
              }
              break;
            case "rook":
              if (colorFig === "b") {
                console.log(colorFig, numberFig)
                if (activeFig.position === activeFig.initPosition) {
                  console.log(activeFig.position.split(""))
                } else {

                }
              }
              break;
          }
        }

      })



    }

    SquareClick(pos) {
      const square = this.getSquare(pos);
      if (square.content) {
        const figureId = square.content.id;
        console.log("Идентификатор", figureId);
      }
    }

    // 456 дайть data-pos именно клетке и дать data-fig а в data-fig идентификатор фигуры ((всё кроме svg) data-fig data-pos data-name)

    getSquare(pos) {
      return this.board[pos];
    }

    setSquare(pos, fig) {
      this.board[pos] = fig;
    }
  }

  for (i = 1; i <= 8; i++) {
    let numberli = document.createElement("li");
    numberli.textContent = i;
    numbers.appendChild(numberli);
    let letterli = document.createElement("li");
    letterli.textContent = letter[i - 1];
    letters.appendChild(letterli);
  }

  const board = new Board(gameboard);

  let startTime = "";
  let durationGame = 0;

  const timer = setInterval(() => {
    const time = new Date();
    currentTime.textContent = time.toLocaleTimeString();
  }, 1000);
  buttonStart.addEventListener("click", () => {
    startTime = Date.now();
    startTimeElement.textContent = new Date(startTime).toLocaleTimeString();
    buttonStart.disabled = true;
    buttonFinish.disabled = false;
  });
})();
