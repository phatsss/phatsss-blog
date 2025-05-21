import React from "react"
import styles from "./CardPreview.module.css"

/**
 * CardPreview Component
 *
 * A visually appealing card with 3D hover effects that track mouse position
 * and create a dynamic tilt effect without using JavaScript.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content to display inside the card
 * @param {string} props.title - Main title text
 * @param {string} props.promptText - Text shown before hovering
 */
export default function CardPreview({
  children,
}: {
  children?: React.ReactNode
}) {
  // Create an array of 25 trackers for the hover effect grid
  const trackers = Array.from({ length: 25 }, (_, i) => i + 1)
const subtitle = "Typescript | Javascript | React | NextJS | Tailwind | NodeJS | NestJS | ExpressJS | MongoDB | PostgreSQL | SQL | Prisma" 
  return (
    <div className={styles.container + " " + styles.noselect}>
      <div className={styles.canvas}>
        {/* Render all tracker divs that create the hover detection grid */}
        {trackers.map((num) => (
          <div key={num} className={`${styles.tracker} ${styles[`tr-${num}`]}`} />
        ))}

        {/* The main card that will be transformed on hover */}
        <div id={styles.card}>
          {/* Prompt text that disappears on hover */}
          <div className={styles.content}>
            <h2>Hello World!!!</h2>
          </div>
          <div id={styles.prompt} className={styles.avatarContainer}>
         
            <img
              src="/img/phatsss-logo.png"
              alt="Developer Avatar"
              className={styles.avatar}
            />
          </div>

          {/* Main content of the card */}
          <div className={styles.title}>
            {/* {title.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < title.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))} */}

            {/* Additional content passed as children */}
          {children}
          </div>

          <div className={styles.subtitle}>{subtitle}</div>

          
        </div>
      </div>
    </div>
  )
}
