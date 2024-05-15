import {expect} from "https://deno.land/x/expect/expect.ts"

let aluno = 'Cróvis José'
let professores = ['João', 'Lais', 'Davi', 'Bruno Aparecido Cano']

Deno.test("Array Professores no expect (EXPECT)", ()=> {
    expect(professores).toContain('Bruno Aparecido Cano');
    expect(professores).not.toContain('Edith');
    expect(professores).toHaveLength(4);
})