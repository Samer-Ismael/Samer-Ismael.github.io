function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress-bar');

  progressBars.forEach((bar) => {
    const targetPercentage = parseInt(bar.style.width);
    let currentPercentage = 0;
    const interval = setInterval(() => {
      if (currentPercentage < targetPercentage) {
        currentPercentage++;
        bar.style.width = `${currentPercentage}%`;
        bar.textContent = `${currentPercentage}%`;
      } else {
        clearInterval(interval);
      }
    }, 10); // Adjust the animation speed
  });
}

// Call the animation function when the page is loaded
window.addEventListener('load', animateProgressBars);

function toggleDropdown(id) {
  const dropdownContent = document.getElementById(id + '-content');
  if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none';
  } else {
    dropdownContent.style.display = 'block';
  }
}

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})


/*

<div class="container ">

  <style>
    .modal-content{
      color: #03021e;
    }
  </style>

  <div class="container">

    <div class="row align-items-center">
      <div class="col-lg-50 text-center">
        <!-- Button trigger modal -->
        <button class="btn btn-primary" data-bs-target="#exampleModal" data-bs-toggle="modal" type="button">
          2016 - 2018
        </button>

        <!-- Modal -->
        <div aria-hidden="true" aria-labelledby="exampleModalLabel" class="modal fade" id="exampleModal" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Arbetsförmedlingen</h1>
                <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
              </div>
              <div class="modal-body">
                <p>Hej do you hear me</p>
              </div>
              <div class="modal-footer">
                <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr>
  </div>

  <div class="container">
    <div class="row align-items-center">

      <div class="col-lg-50 text-center">
        <!-- Button trigger modal -->
        <button class="btn btn-primary" data-bs-target="#exampleModal1" data-bs-toggle="modal" type="button">
          2018 - 2023
        </button>

        <!-- Modal -->
        <div aria-hidden="true" aria-labelledby="exampleModalLabel" class="modal fade" id="exampleModal1" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel1">MTRX</h1>
                <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
              </div>
              <div class="modal-body">
                <p>Hej do you hear me 2</p>
              </div>
              <div class="modal-footer">
                <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr>
  </div>

  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-50 text-center">
        <!-- Button trigger modal -->
        <button class="btn btn-primary" data-bs-target="#exampleModal2" data-bs-toggle="modal" type="button">
          2023 - Ongoing ...
        </button>

        <!-- Modal -->
        <div aria-hidden="true" aria-labelledby="exampleModalLabel" class="modal fade" id="exampleModal2" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel2">Java-Utvecklare</h1>
                <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
              </div>
              <div class="modal-body">
                <p>Hej do you hear me 3</p>
              </div>
              <div class="modal-footer">
                <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr>
  </div>


</div>

 */
