Admin Dashboard – Nested State Management
Overview

A small admin dashboard built with Next.js (App Router) and TypeScript to manage nested data:

Projects → Tasks → Subtasks

The focus is on component structure, nested state management, immutable updates, and cascading derived state — not visual polish.

All data is managed locally using mock data.

Features

Expand / collapse Projects and Tasks

Inline Subtask status updates

Cascading status updates (Subtask → Task → Project)

Basic CRUD:

Add / delete Tasks

Add / delete Subtasks

Component Architecture

The component tree mirrors the data hierarchy:

Page
 └── ProjectList
     └── ProjectItem
         └── TaskItem
             └── SubtaskItem


Each component has a single responsibility:

Layout and hierarchy at higher levels

Interaction and state changes delegated via dispatch

State Management
Why useReducer

Nested data with cascading updates is managed via useReducer to ensure:

Centralized update logic

Explicit, predictable state transitions

Easier reasoning about side effects

State lives at the page level and updates flow downward via props.

Reducer & Derived State

All mutations are handled immutably in projectsReducer.

Statuses are derived, not manually managed:

todo → all children are todo

done → all children are done

in-progress → mixed states

This avoids duplicated state and synchronization bugs.

Mock Data

Mock data is intentionally small but expressive:

Multiple projects

Mixed and completed task trees

Edge cases (single subtask)

Initial data is status-consistent to validate cascading behavior on first render.

Styling

Styling is intentionally minimal and utility-based:

Clear hierarchy

Readable layout

Obvious interactions

Visual polish and advanced UI concerns were intentionally deprioritized.

Performance Notes

Immutable updates are scoped to affected branches

Component boundaries limit unnecessary re-renders

No memoization added due to expected data size

Trade-offs & Improvements

With more time, I would add:

Reducer unit tests

Accessibility improvements

State persistence (e.g. localStorage)

Normalized state for larger datasets