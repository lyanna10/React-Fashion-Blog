import React from 'react'
import Brooklyn from './images/blog-image-1.jpeg'
import Vogue from './images/blog-image-2.jpeg'

function Article(props) {
  return (
    <article>
      <div>
      <p class="articleP">11/12/20</p>
      <h1>On the Street of Brooklyn</h1>
      <img src={Brooklyn} alt='Brooklyn'/>
      <p class="loremP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis exercitationem non
            tempore nostrum
            doloremque expedita, ipsam praesentium repudiandae maiores nihil. Quod, pariatur mollitia saepe sunt
            nulla autem quisquam aut illo totam, architecto impedit recusandae voluptas labore tempora inventore
            dicta nisi. Nisi exercitationem dignissimos minima magnam saepe. Aperiam tempore, incidunt error tenetur
            porro dolorem distinctio quod harum explicabo voluptatum alias, enim ab. Numquam ipsum illo excepturi,
            libero fuga earum facere explicabo quidem nulla, nostrum quisquam repudiandae dolore repellendus!
            Sapiente id esse rem consectetur. Recusandae suscipit corporis soluta quisquam, minima blanditiis
            delectus praesentium iusto optio numquam cum. Exercitationem minus aliquid, nihil, laboriosam, autem at
            explicabo rerum repellat eos sapiente quidem tempora asperiores? Deleniti ratione veniam rerum sint quod
            nemo! Ut rerum iste voluptate molestias dignissimos harum in quia ullam at, vitae velit, delectus
            beatae. Omnis dicta sunt, similique laborum id temporibus neque. Est odit delectus veniam vitae sint,
            nemo id temporibus quam fugit eius provident officiis asperiores debitis pariatur dolore amet labore
            natus voluptatem quod error, sed rerum atque! Optio unde debitis exercitationem delectus excepturi
            deserunt! Laboriosam, odit est? Tempore excepturi ab illo necessitatibus aliquid iste explicabo
            reiciendis eaque, consectetur, modi aperiam. Ex suscipit, ut laborum nesciunt autem quasi accusantium
          cupiditate numquam</p>
        <p class="articleContinues">Continues ...</p>
      </div>
      <div>
        <p class="articleP">11/11/20</p>
        <h1>Vintage in Vogue</h1>
        <img src={Vogue} alt='Vogue' />
        <p class="loremP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis exercitationem non
            tempore nostrum
            doloremque expedita, ipsam praesentium repudiandae maiores nihil. Quod, pariatur mollitia saepe sunt
            nulla autem quisquam aut illo totam, architecto impedit recusandae voluptas labore tempora inventore
            dicta nisi. Nisi exercitationem dignissimos minima magnam saepe. Aperiam tempore, incidunt error tenetur
            porro dolorem distinctio quod harum explicabo voluptatum alias, enim ab. Numquam ipsum illo excepturi,
            libero fuga earum facere explicabo quidem nulla, nostrum quisquam repudiandae dolore repellendus!
            Sapiente id esse rem consectetur. Recusandae suscipit corporis soluta quisquam, minima blanditiis
            delectus praesentium iusto optio numquam cum. Exercitationem minus aliquid, nihil, laboriosam, autem at
            explicabo rerum repellat eos sapiente quidem tempora asperiores? Deleniti ratione veniam rerum sint quod
            nemo! Ut rerum iste voluptate molestias dignissimos harum in quia ullam at, vitae velit, delectus
            beatae. Omnis dicta sunt, similique laborum id temporibus neque. Est odit delectus veniam vitae sint,
            nemo id temporibus quam fugit eius provident officiis asperiores debitis pariatur dolore amet labore
            natus voluptatem quod error, sed rerum atque! Optio unde debitis exercitationem delectus excepturi
            deserunt! Laboriosam, odit est? Tempore excepturi ab illo necessitatibus aliquid iste explicabo
            reiciendis eaque, consectetur, modi aperiam. Ex suscipit, ut laborum nesciunt autem quasi accusantium
          cupiditate numquam</p>
        <p class="articleContinues">Continues ...</p>
      </div>
    </article>
  )
}

export default Article